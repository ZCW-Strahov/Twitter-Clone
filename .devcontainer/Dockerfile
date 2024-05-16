# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.209.6/containers/java/.devcontainer/base.Dockerfile

# [Choice] Java version (use -bullseye variants on local arm64/Apple Silicon): 17, 17-bullseye, 17-buster
ARG VARIANT="17"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# Install Maven
ARG INSTALL_MAVEN="true"
ARG MAVEN_VERSION="3.9.5"
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then \
    su vscode -c "umask 0002 && . /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven ${MAVEN_VERSION}"; \
    fi && mvn --version

# Install additional tools, utilities, and libraries
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends git curl

COPY . /workspace
WORKDIR /workspace

RUN mvn -X clean package -Pprod -DskipTests

# Expose port 8080 for the application
EXPOSE 8315

# Run the application
CMD ["java", "-jar", "target/Twitter-Clone-Dan-SNAPSHOT.jar"]
