# SBA-ELI 

This application is for the SBA ELI program.

## Installation
### Requirements:
* Install asdf and asdf-ruby
  -(asdf)[https://github.com/asdf-vm/asdf]
  - `asdf plugin-add ruby https://github.com/asdf-vm/asdf-ruby.git`
* Ruby 2.5.3
- `asdf install ruby 2.5.3` 
- `asdf global ruby 2.5.3`
* Node
- `brew install node`
* Yarn
- `brew install yarn`
* Postgresql 11
  * Mac
    - Use [Postgres.app](http://postgresapp.com)

## Getting Started

```bash
bundle install
bundle exec rails db:create
bundle exec rails db:migrate
```

If `bundle install` fails due to the pg gem run:
```bash 
gem install pg -- --with-pg-config=//Applications/Postgres.app/Contents/Versions/11/bin/pg_config
```

## Run
To launch the app:
```bash
rails server
```

Then point your browser to http://localhost:3000/

## Testing
To run the test suit, run:
```
rspec
```

For more verbose output, run:
```
rspec -fd
```
