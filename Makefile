.PHONY: init
.DEFAULT_GOAL := help
TMP_HOSTS := /tmp/hosts

init:
  bash bin/add_hosts.sh
	bash bin/add_trusted_cert.sh
	docker compose up -d --build
	