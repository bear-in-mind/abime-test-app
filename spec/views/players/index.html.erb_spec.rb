require 'rails_helper'

RSpec.describe "players/index", type: :view do
  before(:each) do
    assign(:players, [
      Player.create!(
        name: "Name",
        team: nil,
        age: 2,
        email: "Email"
      ),
      Player.create!(
        name: "Name",
        team: nil,
        age: 2,
        email: "Email"
      )
    ])
  end

  it "renders a list of players" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: "Email".to_s, count: 2
  end
end