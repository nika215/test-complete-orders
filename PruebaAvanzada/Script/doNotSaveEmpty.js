function Test6()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Opens the 'C:\Users\moantona\OneDrive - Capgemini\Documents\TestComplete 15 Projects\PruebaAvanzada\PruebaAvanzada\Stores\Files\PepeOrder.tbl' file via the 'dlgOpen' dialog.
  Aliases.Orders.dlgOpen.OpenFile(Project.path+"Stores\\Files\\PepeOrder.tbl", "Table (*.tbl)");
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
  //Clicks the 'ButtonOK' button.
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  //Clicks the 'MainForm' object.
  Aliases.Orders.MainForm.Click(66, 45);
    //Compares the OrdersView Stores item with the contents of the control.
  
    equal(Tables.OrdersView.RowCount,1);
  
  TestedApps.Orders.Terminate();
}
