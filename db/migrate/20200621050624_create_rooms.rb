class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name, default: '新しいチャット'
      
      t.timestamps
    end
  end
end
