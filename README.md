# README

## Setup

* Ruby version - ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [x86_64-darwin20]
* Node version - v12.21.0

* Database creation
Run `rails db:create`
Run `rails db:migrate`

* Database initialization
Run rake task/script `rails import:data`

### Assumptions

Import script assumes that

- Emails are unique and must for a user to exist, if user already exist we skip the new entry
- Any user details who has a missing email is skipped
- Product code is unique and duplicate entries will be skipped
- Any order detail for a non existing user or product is just reported, may be with some reporting tool, right now I would report it using console prints only

## Run the Application

```
bundle exec rake assets:precompile
./bin/dev
rails jobs:work
```

## Demo

https://github.com/Faizaankhan3/avaamo_test_app/assets/16518466/6ecefc75-90f8-4389-b176-b7e84f2fb22a

