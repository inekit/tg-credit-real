# Role installs and configures Logwatch

## Tags

* `logwatch` - Full cycle
* `logwatch_config` - Render all the configuration files
* `logwatch_packages` - Install packages
* `logwatch_check_crond` - Check if crond service is up and running
* `logwatch_test` - Perform a Logwatch test run

## Variables

```yaml
logwatch_services_templates: []

check_crond_service: true

logwatch_conf_dir: /etc/logwatch/conf
logwatch_services_dir: "{{ logwatch_conf_dir }}/services"
logwatch_conf_file: "{{ logwatch_conf_dir }}/logwatch.conf"

logwatch_owner: root
logwatch_group: wheel

logwatch_LogDir: /var/log
logwatch_TmpDir: /var/cache/logwatch
logwatch_Output: mail
logwatch_Format: text
logwatch_Encode: none
logwatch_MailTo: 
  - root
logwatch_MailFrom: Logwatch
logwatch_Archives: No
logwatch_Range: yesterday
logwatch_Detail: Low
logwatch_Service: 
  - "All"
  - "-eximstats"
logwatch_LogFile: messages
logwatch_mailer: "/usr/sbin/sendmail -t"
```

## Services Templates

The role kind of supports OS-specific configuration for Logwatch services templates.

Available naming options:

* OS-specific: `FILENAME.CONF-osfamily-majorversion.j2`
* Default/fallback: `FILENAME.CONF-default.j2`
* Untagged: `FILENAME.CONF.j2`

Services configuration files in `templates/etc/logwatch/conf/services/{{ filename }}.j2`:
1. Create .j2 file with variables (eg. sudo.conf.j2).
1. Add `{{ filename }}` in the `logwatch_services_templates` list.
1. The file will appear as `/etc/logwatch/conf/services/sudo.conf` on the remote server.

