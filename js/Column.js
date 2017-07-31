function Column(id, name) {
    this.id = id;
    this.name = name || 'No name given';
}

deleteColumn: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/column/' + self.id,
      method: 'DELETE',
      success: function(response){
        self.element.remove();
      }
    });
}


columnAddCard.click(function(event) {
	var cardName = prompt("Enter the name of the card");
	event.preventDefault();
  $.ajax({
    url: baseUrl + '/card',
    method: 'POST',
    data: {
    name: cardName,
    bootcamp_kanban_column_id: self.id
    },
    success: function(response) {
      var card = new Card(response.id, cardName);
      self.createCard(card);
    }
  });
});
