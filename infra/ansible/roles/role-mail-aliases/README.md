# Configures /etc/aliases

Keep in mind that `/etc/aliases` is being used by the `mail` program which doesn't follow the aliases when MTA is configured with virtual routing.

## Variables

```yaml
newaliases_executable: /usr/bin/newaliases

mail_aliases_test_users:
  - root
  - admin
  - youruser

mail_aliases_test_subject: "Test email from {{ inventory_hostname }}"

mail_aliases_test_email: |
  TEST, DON'T ANSWER

mail_aliases:
  - user: root
    alias: admin@example.com,secondary@foobar.org
  - user: admin
    alias: admin@example.com
```
