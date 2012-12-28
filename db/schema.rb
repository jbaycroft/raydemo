# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121221195739) do

  create_table "departments", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.string   "location"
    t.boolean  "complete"
    t.date     "date_completed"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "hazards", :force => true do |t|
    t.string   "haztype"
    t.text     "description"
    t.string   "question1"
    t.string   "question2"
    t.string   "question3"
    t.string   "question4"
    t.boolean  "question5"
    t.boolean  "question6"
    t.boolean  "question7"
    t.boolean  "question8"
    t.string   "question9"
    t.string   "question10"
    t.boolean  "complete"
    t.date     "date_completed"
    t.integer  "task_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "hazards", ["task_id"], :name => "index_hazards_on_task_id"

  create_table "tasks", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "hazard1"
    t.boolean  "hazard2"
    t.boolean  "hazard3"
    t.boolean  "hazard4"
    t.string   "location"
    t.boolean  "complete"
    t.date     "date_completed"
    t.integer  "department_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "tasks", ["department_id"], :name => "index_tasks_on_department_id"

end