function modifyTest(){
  //open orders app
  TestedApps.Orders.Run();
  //open the file to modificate
  openFile();
  //modify the file
  modify();
  
  aqString.Compare(Aliases.Orders.MainForm.OrdersView.wSelectedItems, "Pepita", true);
  TestedApps.Orders.Terminate();
}

function openFile(){
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Open...");
  //Clicks the '|Desktop|Desktop' item of the 'tvNamespaceTreeControl' tree.
  Aliases.Orders.dlgOpen.OpenFile(Project.Path+"Stores\\Files\\modify.tbl", "Table (*.tbl)");
}

function modify(){
  //Clicks the 'FamilyAlbum' subitem of the 'Pepa' item of the 'OrdersView' list view.
  Aliases.Orders.MainForm.OrdersView.ClickItem("Pepa", "FamilyAlbum");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|Edit order...");
  //Clicks the 'Customer' object.
  Aliases.Orders.OrderForm.Group.Customer.Click(41, 12);
  //Enters the text 'Pepita' in the 'Customer' text editor.
  Aliases.Orders.OrderForm.Group.Customer.SetText("Pepita");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
}

