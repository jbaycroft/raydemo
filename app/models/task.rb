class Task < ActiveRecord::Base
  belongs_to :department
  has_many :hazards, :dependent => :destroy
  attr_accessible :complete,
  				  :date_completed, 
  				  :description,
  				  :hazard1,
  				  :hazard2,
  				  :hazard3,
  				  :hazard4,
  				  :hazard5,
  				  :hazard6,
  				  :hazard7,
  				  :hazard8,
  				  :hazard9,
  				  :hazard10,
  				  :hazard11,
  				  :hazard12,
  				  :hazard13,
  				  :hazard14,
  				  :hazard15,
  				  :hazard16,
  				  :hazard17,
  				  :hazard18,
  				  :hazard19,
  				  :hazard20,
  				  :location,
            :team,
            :shifttime,
            :shiftday,
            :shiftnight,
            :shiftweekend,
            :shiftwrker,
            :equipmachine,
            :machine,
            :equiptool,
            :tool,
            :equipdevice,
            :device,
            :restricted,
            :restrictmethod1,
            :restrictmethod2,
            :restrictmethod3,
            :history,
  				  :name
  accepts_nested_attributes_for :hazards
  attr_accessible :hazards_attributes
  #accepts_nested_attributes_for :hazards, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true
end
