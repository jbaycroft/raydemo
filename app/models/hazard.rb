class Hazard < ActiveRecord::Base
  belongs_to :task
  attr_accessible :complete, :date_completed, :description, :question1, :question10, :question2, :question3, :question4, :question5, :question6, :question7, :question8, :question9, :haztype
end
