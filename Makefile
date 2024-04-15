# Makefile

# Variables
API_DIR = ./api

# Run the API
run-api:
	@echo "Starting the API..."
	@cd $(API_DIR) && npm start

# Install dependencies for both API and frontend
install:
	@echo "Installing dependencies for API..."
	@cd $(API_DIR) && npm install

.PHONY: run-api run-all install
