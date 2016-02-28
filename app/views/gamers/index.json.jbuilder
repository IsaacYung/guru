json.array!(@gamers) do |gamer|
  json.extract! gamer, :id, :name, :email, :age
  json.url gamer_url(gamer, format: :json)
end
