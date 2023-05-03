terraform {
  required_providers {
    hcloud = {
      source = "hetznercloud/hcloud"
    }
  }
  required_version = ">= 0.13"
}

# Configure the Hetzner Cloud Provider
provider "hcloud" {
  token = var.hcloud_token
}

resource "hcloud_ssh_key" "deployment_key" {
  name       = "deployment_key"
  public_key = file("deployment_public_key.pub")
}

resource "hcloud_ssh_key" "private_key" {
  name       = "private_key"
  public_key = file("private_access_public_key.pub")
}

resource "hcloud_server" "ui-server" {
  name        = var.host_name
  image       = "ubuntu-22.04"
  server_type = "cax11"
  location    = "fsn1"
  ssh_keys    = [hcloud_ssh_key.deployment_key.id, hcloud_ssh_key.private_key.id]
  user_data = templatefile("user_data.yml",
    {
      host_name        = var.host_name
      ssl_email        = var.ssl_email
      traefik_username = var.traefik_username
      traefik_password = var.traefik_password
  })
}

output "server_ip" {
  value = hcloud_server.ui-server.ipv4_address
}
