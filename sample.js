   <script type="text/javascript">

        //you have to include ms.tree service 
        var module = angular.module('customApplication', ['ms.tree']);

        module.controller('treeCtrl', function ($scope) {

            //Necessary guidance

            //Include ms-tree.js & ms-tree.css in for project
            //Inject 'ms.tree' service in your angularJS module

            //-----------Declaration In DOM----------
            //<div ms-tree="deptTree" class="ms-tree"></div>

            // -----------Sample Class Declaration For C#---------

            //ID filed name must be - NodeId
            //Node name file must be - Name
            //Children list name must be - ChildNodes
            //Root Node Hold all child element 


            //public class Menu {
            //    public Menu() {
            //        NodeId = 0;
            //        Name = string.Empty;
            //        ParentId = 0;
            //        ChildNodes = new List<Menu>();
            //    }

            //    public int NodeId { get; set; }
            //    public string Name { get; set; }
            //    public int ParentId { get; set; }
            //    public List< Menu > ChildNodes { get; set; }
            //}
            

            //-------------------- This one For Java Script-------------


            $scope.node = {
                NodeId: 1,
                Name: 'Department',
                ChildNodes:
                [
                    {
                        NodeId: 2, Name: 'CSE', ChildNodes:
                        [
                            {
                                NodeId: 3, Name: 'Programming', ChildNodes:
                                [
                                    { NodeId: 10, Name: 'AngularJS', ChildNodes: [] },
                                    { NodeId: 11, Name: 'C#', ChildNodes: [] },
                                    { NodeId: 12, Name: 'Python', ChildNodes: [] }
                                ]
                            },
                            {
                                NodeId: 9, Name: 'Theory', ChildNodes:
                                [
                                    { NodeId: 13, Name: 'Compiler', ChildNodes: [] },
                                    { NodeId: 14, Name: 'Automata', ChildNodes: [] }
                                ]
                            }
                        ]
                    },
                    {
                        NodeId: 4, Name: 'EEE', ChildNodes: []
                    },
                    {
                        NodeId: 5, Name: 'Civil', ChildNodes: []
                    },
                    {
                        NodeId: 6, Name: 'BBA', ChildNodes: []
                    },
                    {
                        NodeId: 7, Name: 'Textile', ChildNodes:
                        [
                            {
                                NodeId: 15, Name: 'Theroy', ChildNodes:
                                [
                                    { NodeId: 17, Name: 'Math', ChildNodes: [] },
                                    { NodeId: 18, Name: 'Apparel Pro.', ChildNodes: [] },
                                    { NodeId: 19, Name: 'Swing', ChildNodes: [] }
                                ]
                            },
                            {
                                NodeId: 16, Name: 'Lab', ChildNodes:[]
                            }
                        ]
                    },
                    {
                        NodeId: 8, Name: 'Arch', ChildNodes: []
                    }
                ]
            };

            $scope.deptTree = {
                showRoot: true, // to show root node.
                data: $scope.node
            }



        });


    </script>