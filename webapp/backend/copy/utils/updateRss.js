const { Feed } = require('feed');
const tOrmCon = require('../db/connection');
require('dotenv').config();
const { FRONT_URI, SERVER_URI } = process.env;
const marked = require('marked');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
const fs = require('fs');

async function updateRss() {
  const connection = await tOrmCon;

  connection
    .query(
      `select p.id,p.title,p.description, p.text, p.preview_name,
        p.publication_date,p.project_name, array_agg(ptt.tags_name) as tags_array
        from public.posts p
        left join public.posts_tags_tags ptt on p.id = ptt.posts_id
        group by p.id
        order by publication_date DESC
        LIMIT 20`
    )
    .then((data) => {
      fs.writeFile('./public/RSS.xml', postsToRss(data), 'utf8', (err) => {
        if (err) console.log('RSS save error!');
        else console.log('RSS saved!');
      });
    })
    .catch(console.error);
}

function postsToRss(posts) {
  const feed = new Feed({
    title: 'Kolya Blog',
    description: 'This is my personal feed!',
    id: `http://${FRONT_URI}`,
    link: `http://${FRONT_URI}`,
    language: 'ru',
    image: `http://${SERVER_URI}/public/pics/image.png`,
    favicon: `http://${SERVER_URI}/public/pics/favicon.ico`,
    copyright: 'All rights reserved 2022, Nikolay Melnikov',
    updated: new Date(),
    generator: 'Feed for Node.js',
    feedLinks: {
      atom: `http://${FRONT_URI}/rss`,
    },
    author: {
      name: 'Nikolay Melnikov',
      email: '',
      link: `http://${FRONT_URI}/about`,
    },
  });

  posts.forEach((post) => {
    post.tags_array = post.tags_array
      .filter((tag) => tag !== null)
      .map((tag) => {
        return { term: tag, scheme: `http://${FRONT_URI}/tags/${tag}` };
      });

    post.project_name &&
      post.tags_array.push({
        term: post.project_name,
        scheme: `http://${FRONT_URI}/projects/${post.project_name}`,
      });

    feed.addItem({
      title: post.title,
      id: `http://${FRONT_URI}/posts/${post.id}`,
      link: `http://${FRONT_URI}/posts/${post.id}`,
      description: post.description,
      content: DOMPurify.sanitize(marked.parse(post.text ?? ' ')),
      author: [
        {
          name: 'Nikolay Melnikov',
          email: '',
          link: `http://${FRONT_URI}/about`,
        },
      ],
      category: post.tags_array,
      date: post.publication_date,
      image: post.preview_name ? `http://${SERVER_URI}/public/pics/${post.preview_name}` : undefined,
    });
  });

  return feed.atom1();
}

module.exports = updateRss;
