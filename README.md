# Javascript-From-zero-to-hero

# NOTES 

# jQuery-Widgets

  # Autocomplete

  - Has possible methods, options, events, extension points
  - Extension points: _renderItem will be used to change or customize the way we want the items in that list 
  - _renderItem(ul, item) 
      - ul
        Type:jQuery
        The <ul> element that the newly created <li> element must be appended to.
      - item 
        Type:Object
          - label
            Type:String
            The String to display for the item

          - value
            Type: String
            The value to insert into the input when the item is selected
