# Ansible playbooks

## Initialise the environment

```bash
python3.10 -m virtualenv --prompt="py3.10 ansible2.9" .virtualenv
```

```
source .virtualenv/bin/activate
pip install -r requirements.txt
ansible-galaxy collection install community.general
```

## Run playbooks

```
ansible-playbook -vD -i inventory.yml --become 001_initialise.yml -t users -l "bgt-01*" -C
```

## Encrypt strings

```
ansible-vault encrypt_string --vault-password-file .vault.passwd SECRET_STRING
```

