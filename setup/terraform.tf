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

resource "hcloud_ssh_key" "default" {
  name       = "hetzner_key"
  public_key = file("tf_public_key_hetzner.pub")
}

resource "hcloud_server" "ui-server" {
  name        = "web-server"
  image       = "ubuntu-22.04"
  server_type = "cx11"
  location    = "fsn1"
  ssh_keys    = [hcloud_ssh_key.default.id]
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
