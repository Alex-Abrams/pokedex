# Iterate over each pokemon.
# Use json.set! to explicitly set the key to the pokemon's id.
# Use json.extract! to grab the pokemon's id, name, and image_url.
# json.set! :author do
#   json.set! :name, 'David'
# end


# json.set :pokemons do
#   json.extract! :id, :name, :image_url
# end


# @pokemon.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name, :image_url
#   end
# end


@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path(poke.image_url)
  end
end
