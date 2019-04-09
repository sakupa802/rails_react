module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :text, String, null: false
    field :category_id, Int, null: false
  end
end
