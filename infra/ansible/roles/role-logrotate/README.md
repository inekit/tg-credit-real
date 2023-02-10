# Role installs and configures logrotate

## Tags

* `logrotate` - Performs all the tasks

## Variables

```yaml
logrotate_rules:

  - name: syslog
    files:
      - /var/log/cron
      - /var/log/messages
      - /var/log/secure
      - /var/log/spooler
    directives:
      - missingok
      - compress
      - rotate: 90
      - weekly
      - missingok
      - postrotate: |
          /usr/bin/systemctl kill -s HUP rsyslog.service >/dev/null 2>&1 || true

  - name: maillog
    files:
      - /var/log/maillog
    directives:
      - missingok
      - compress
      - rotate: 90
      - weekly
      - missingok
      - postrotate: |
          /usr/bin/systemctl kill -s HUP rsyslog.service >/dev/null 2>&1 || true

```
