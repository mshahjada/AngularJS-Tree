# AngularJS-Tree
//Necessary guidance

1. Include ms-tree.js & ms-tree.css in for project
2. Inject 'ms.tree' service in your angularJS module

-----------Declaration In DOM--------

3. "<div ms-tree="deptTree" class="ms-tree"></div>"

------ Sample Class For C#--------

4. ID filed name must be - NodeId
5. Node name file must be - Name
6. Children list name must be - ChildNodes
7. Root Node Hold all child element


//public class Menu
//{
//  public Menu()
//  {
//    NodeId = 0;
//    Name = string.Empty;
//    ParentId = 0;
//    ChildNodes = new List<Menu>();
//  }
//  public int NodeId { get; set; }
//  public string Name { get; set; }
//  public int ParentId { get; set; }
//  public List< Menu > ChildNodes { get; set; }
//}
