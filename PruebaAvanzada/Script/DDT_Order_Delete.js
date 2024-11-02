function deleteOrder()
{
  //Runs the "Orders" tested application.
  TestedApps.Orders.Run();
  //Clicks the 1 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
  //Opens the 'C:\Users\moantona\OneDrive - Capgemini\Documents\TestComplete 15 Projects\PruebaAvanzada\PruebaAvanzada\Stores\Files\PepeOrder.tbl' file via the 'dlgOpen' dialog.
  Aliases.Orders.dlgOpen.OpenFile(Project.path+"Stores\\Files\\PepeOrder.tbl", "Table (*.tbl)");
  //Clicks the 'MyMoney' subitem of the 'Pepe' item of the 'OrdersView' list view.
  Aliases.Orders.MainForm.OrdersView.ClickItem("Pepe", "MyMoney");
  //Clicks the 6 item of the 'ToolBar' toolbar.
  Aliases.Orders.MainForm.ToolBar.ClickItem(6, false);
  //Clicks the 'btnYes' button.
  Aliases.Orders.dlgConfirmation.btnYes.ClickButton();
  //Verify orders is empty
  aqString.Compare(Aliases.Orders.MainForm.OrdersView.wSelectedItems, "", true);
  //close the app orders
  TestedApps.Orders.Terminate();
}