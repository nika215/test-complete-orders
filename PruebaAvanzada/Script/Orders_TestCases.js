// This Test checks that the SaveAs works properly
var filePath= Project.Path+"pepe2.tbl";

function clean(){
  // Remove previus file if exists
  if(aqFileSystem.Exists(filePath)){
      aqFileSystem.DeleteFile(filePath);
    }
}
function SaveAs()
{
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'Customer' object.
  //Aliases.Orders.OrderForm.Group.Customer.Click(32, 2);
  //Enters the text 'Pepe' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Pepe");
  //Enters the text '5th Avenue' in the 'Street' text editor.
  Aliases.Orders.OrderForm.Group.Street.SetText("5th Avenue");
  //Enters the text 'New York' in the 'City' text editor.
  Aliases.Orders.OrderForm.Group.City.SetText("New York");
  //Enters the text 'New York' in the 'State' text editor.
  Aliases.Orders.OrderForm.Group.State.SetText("New York");
  //Clicks the 'Zip' object.
  //Aliases.Orders.OrderForm.Group.Zip.Click(53, 10);
  //Enters the text '123456789' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("123456789");
  //Clicks the 'CardNo' object.
//  Aliases.Orders.OrderForm.Group.CardNo.Click(98, 8);
  //Clicks the 'Zip' object.
 // Aliases.Orders.OrderForm.Group.Zip.Click(78, 5);
  //Enters the text '765758' in the 'Zip' text editor.
  Aliases.Orders.OrderForm.Group.Zip.SetText("765758");
  //Clicks the 'CardNo' object.
 // Aliases.Orders.OrderForm.Group.CardNo.Click(94, 8);
  //Enters the text '123456789' in the 'CardNo' text editor.
  Aliases.Orders.OrderForm.Group.CardNo.SetText("123456789");
  //Sets the date '06/04/2025' in the 'ExpDate' date/time picker.
  Aliases.Orders.OrderForm.Group.ExpDate.wDate = "06/04/2025";
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Save As...");
  //Enters the text 'pepe2.tbl' in the 'ComboBox' text editor.
  Aliases.Orders.dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText(filePath);
  //Clicks the 'btnSave' button.
  Aliases.Orders.dlgSaveAs.btnSave.ClickButton();
}

function main(){
  // clean previous file
clean();
// Run the program to test
TestedApps.Orders.Run();
// Test 
SaveAs();
// check if the 2 files are the same
Files.PepeOrder_tbl.Check(filePath);
TestedApps.Orders.Terminate();
}


