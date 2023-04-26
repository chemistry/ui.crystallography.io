# tocken created in https://console.hetzner.cloud/projects/
variable "hcloud_token" {
  default = ""
}
# hostname used for deployment
variable "host_name" {
  default = ""
}
# email used to requesr ssl certificate from letsencrypt
variable "ssl_email" {
  default = ""
}
# username used for basic auth
variable "traefik_username" {
  default = ""
}
# password used for basic auth
variable "traefik_password" {
  default = ""
}
