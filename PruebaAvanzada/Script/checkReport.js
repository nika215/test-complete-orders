
var filePath= Project.Path+"customerList.txt";

function checkReport(){

  // Remove previus file if exists
  if(aqFileSystem.Exists(filePath)){
      aqFileSystem.DeleteFile(filePath);
  }
  

  //open orders app
  TestedApps.Orders.Run();
  //open the file from the report will be generated
  openFile();
  //create the report file
  generateReport();
  
  // check if the generated report is equals to the expected file
  Files.CustomerList_txt.Check(filePath);
  
  TestedApps.Orders.Terminate();
}

function openFile(){
  //Moves the mouse cursor to the menu item specified and then simulates a single click.
  Aliases.Orders.MainForm.MainMenu.Click("File|Open...");
  //Clicks the '|Desktop|Desktop' item of the 'tvNamespaceTreeControl' tree.
  Aliases.Orders.dlgOpen.OpenFile(Project.Path+"Stores\\Files\\multipleClients.tbl", "Table (*.tbl)");
}

function generateReport(){
Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(963, 28);
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Report|Generate customer list...");
  let dlgSaveAs = orders.dlgSaveAs;
  dlgSaveAs.DUIViewWndClassName.Explorer_Pane.FloatNotifySink.ComboBox.SetText(filePath);
  dlgSaveAs.btnSave.ClickButton();
}

