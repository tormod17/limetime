var MemoryStore = 
 [
            {"id": 1, "eventName": "Smokey & Buntys", "lastName": "Howard", "music":"Vice President, North East", "managerId": 0, "area":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com"},
            {"id": 2, "eventName": "Shakers", "lastName": "Scott", "music":"Regional Manager", "managerId": 1, "area":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com"},
            {"id": 3, "eventName": "51 degrees", "lastName": "Schrute", "music":"Assistant Regional Manager", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com"},
            {"id": 4, "eventName": "Ruscoes", "lastName": "Halpert", "music":"Assistant Regional Manager", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com"},
            {"id": 5, "eventName": "Pamela", "lastName": "Beesly", "music":"Receptionist", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com"},
            {"id": 6, "eventName": "Angela", "lastName": "Martin", "music":"Senior Accountant", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com"},
            {"id": 7, "eventName": "Kevin", "lastName": "Malone", "music":"Accountant", "managerId": 6, "area":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"},
            {"id": 8, "eventName": "Oscar", "lastName": "Martinez", "music":"Accountant", "managerId": 6, "area":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com"},
            {"id": 9, "eventName": "Creed", "lastName": "Bratton", "music":"Quality Assurance", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com"},
            {"id": 10, "eventName": "Andy", "lastNSame": "Bernard", "music":"Sales Director", "managerId": 4, "area":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com"},
            {"id": 11, "eventName": "Phyllis", "lastName": "Lapin", "music":"Sales Representative", "managerId": 10, "area":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com"},
            {"id": 12, "eventName": "Stanley", "lastName": "Hudson", "music":"Sales Representative", "managerId": 10, "area":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com"},
            {"id": 13, "eventName": "Meredith", "lastName": "Palmer", "music":"Supplier Relations", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com"},
            {"id": 14, "eventName": "Kelly", "lastName": "Kapoor", "music":"Customer Service Rep.", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com"},
            {"id": 15, "eventName": "Toby", "lastName": "Flenderson", "music":"Human Resources", "managerId": 1, "area":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"}
        ];







/*var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {cit
        var employees = this.employees.filter(function(element) {
            var fullName = element.eventName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    };

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    };

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    };

    this.employees = [
            {"id": 1, "eventName": "Ryan", "lastName": "Howard", "music":"Vice President, North East", "managerId": 0, "area":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com"},
            {"id": 2, "eventName": "Michael", "lastName": "Scott", "music":"Regional Manager", "managerId": 1, "area":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com"},
            {"id": 3, "eventName": "Dwight", "lastName": "Schrute", "music":"Assistant Regional Manager", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com"},
            {"id": 4, "eventName": "Jim", "lastName": "Halpert", "music":"Assistant Regional Manager", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com"},
            {"id": 5, "eventName": "Pamela", "lastName": "Beesly", "music":"Receptionist", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com"},
            {"id": 6, "eventName": "Angela", "lastName": "Martin", "music":"Senior Accountant", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com"},
            {"id": 7, "eventName": "Kevin", "lastName": "Malone", "music":"Accountant", "managerId": 6, "area":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"},
            {"id": 8, "eventName": "Oscar", "lastName": "Martinez", "music":"Accountant", "managerId": 6, "area":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com"},
            {"id": 9, "eventName": "Creed", "lastName": "Bratton", "music":"Quality Assurance", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com"},
            {"id": 10, "eventName": "Andy", "lastName": "Bernard", "music":"Sales Director", "managerId": 4, "area":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com"},
            {"id": 11, "eventName": "Phyllis", "lastName": "Lapin", "music":"Sales Representative", "managerId": 10, "area":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com"},
            {"id": 12, "eventName": "Stanley", "lastName": "Hudson", "music":"Sales Representative", "managerId": 10, "area":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com"},
            {"id": 13, "eventName": "Meredith", "lastName": "Palmer", "music":"Supplier Relations", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com"},
            {"id": 14, "eventName": "Kelly", "lastName": "Kapoor", "music":"Customer Service Rep.", "managerId": 2, "area":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com"},
            {"id": 15, "eventName": "Toby", "lastName": "Flenderson", "music":"Human Resources", "managerId": 1, "area":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"}
        ];

    callLater(successCallback);

};  */