import Debug "mo:base/Debug";
import List "mo:base/List";
import Nat "mo:base/Nat";

actor DKeeper{
  // create a datatype to hold user notes
  public type Note = {
    title : Text;
    content : Text;
  };
  // create a list to hold the notes
  var notes : List.List<Note> = List.nil<Note>();

  // create a function to add a note to the list
  public func createNote(titleText : Text, contentText : Text){

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);

    Debug.print(debug_show(notes));
  };

  public query func getNotes() : async [Note] {
    return List.toArray(notes);
  };

  // function to delete a note
  public func deleteNote(id : Nat) {
    let frontList = List.take(notes, id);
    let backList = List.drop(notes, id + 1);
    notes := List.append(frontList, backList)

  }
}

 