.PHONY: init
.DEFAULT_GOAL := help
TMP_HOSTS := /tmp/hosts

init:
  bash bin/add_hosts.sh
	docker compose up -d --build
	