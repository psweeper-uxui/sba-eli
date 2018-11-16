namespace :app do
  ##
  # This task helps bootstrap a development environment by creating
  # migrating, seeding and preparing the test database
  #
  # bin/rails app:build
  #
  task  :build, [] => :environment do
    Rake::Task["db:create"].execute
    Rake::Task["db:migrate"].execute
    Rake::Task["db:seed"].execute
    Rake::Task["db:test:prepare"].execute
  end

  ##
  # This task helps tear down and rebuild the database if you want to
  # start from a clean slate. Kills all postgres conections, drops the
  # database then builds it
  #
  # bin/rails app:rebuild
  #
  task :rebuild, [] => :environment do
    raise "Not allowed to run on production" if Rails.env.production?

    sql = <<-SQL
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE datname = current_database() AND pid <> pg_backend_pid();
    SQL

    ActiveRecord::Base.connection.execute(sql)
    Rake::Task["db:drop"].execute
    Rake::Task["app:build"].execute
  end

  ##
  # This task is used for custom seeding any data you want for development.
  # whereas db/seeds.rb seeds the base dataset, this extends that to seed any
  # data for development purposes
  #
  # bin/rails app:seed
  #
  task :seed, [] => :environment do
    puts "*" * 80
    puts "* Seeding Database"
    puts "*" * 80
    Rake::Task["db:seed"].execute
    # Add extra seeding files here if needed.
  end
end
