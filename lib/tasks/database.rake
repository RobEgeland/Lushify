namespace :database do
    desc "Kill all PostgreSQL database processes"
    task kill_processes: :environment do
      puts "Killing PostgreSQL database processes..."
      `sudo pkill -u postgres`
      puts "All PostgreSQL database processes have been killed."
    end
    task stop_all_servers: :environment do
    puts "Stopping all PostgreSQL servers..."
    `pg_ctl -D /usr/local/var/postgres stop -s -m fast`
    `kill -9 $(lsof -ti:3000)`
    puts "All PostgreSQL servers have been stopped."
    puts "Removing server.pid files..."
    `rm -f tmp/pids/server*.pid`
    puts "Server.pid files have been removed."
    end
  end
  