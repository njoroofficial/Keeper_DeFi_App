import Debug "mo:base/Debug";
import List "mo:base/List";


actor DKeeper{
  // create a datatype to hold user notes
  public type Note = {
    title : Text;
    content : Text;
  };

  var notes : List.List<Note> = List.nil<Note>();

  public func createNote(titleText : Text, contentText : Text){

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);

    Debug.print(debug_show(notes));
  }


}