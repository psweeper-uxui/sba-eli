#!/bin/sh
set -e
<<<<<<< HEAD
 if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi
 exec bundle exec "$@"
=======

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

exec bundle exec "$@"
>>>>>>> dockerized-service-frontend
