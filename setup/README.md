# Setup infrastructure

## Deploy infrastructure

Create account in [hetzner](https://console.hetzner.cloud/) cloud and generate API token.
Create and add your SSH public key to tf_hetzner.pub file.
Modify the `terraform.tf` file to match your environment.

```bash
terraform init
terraform plan
terraform apply
```

## View logs in server

```bash
/var/log/cloud-init-output.log
```

## Destroy environment

```bash
terraform destroy
```
