/*global define,location */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "3d4016c9764e46b29772c77b3ad51979",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    //group: "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": true,
    //If you need localization set the localize value to true to get the localized strings
    //from the javascript/nls/resource files.
    //Note that we've included a placeholder nls folder and a resource file with one error string
    //to show how to setup the strings file.
    "localize": true,
    "units": null,
    //Theme defines the background color of the title area and tool dialog
    //Color defines the text color for the title and details. Note that
    //both these values must be specified as hex colors.
    "theme": "#B8860B",
    "color": "#fff",
    //Specify the tool icon color for the tools on the toolbar and the menu icon.
    // Valid values are white and black.
    "icons": "white",
    "logo": "images/pratt_logo.png",
    //Set of tools that will be added to the toolbar
    "tools": [
        {"name": "legend", "enabled": true},
        {"name": "bookmarks", "enabled": true},
        {"name": "layers", "enabled": true},
        {"name": "basemap", "enabled": true},
        {"name": "overview", "enabled": true},
        {"name": "measure", "enabled": true},
        {"name": "edit", "enabled": true, "toolbar": false},
        {"name": "print", "enabled": true, "legend": true, "layouts":false, "format":"pdf"},
        {"name": "details", "enabled": true},
        {"name": "share", "enabled": true}
    ],
    //Set the active tool on the toolbar. Note home and locate can't be the active tool.
    "activeTool": "layers",
    //Add the geocoding tool next to the title bar
    "search": true,
    //Add the home extent button to the toolbar
    "home": true,
    // value for the "details" button in the app 
   "description": "<strong><p id='header_details'>List of Data Sources:</p></strong>  <p id='subtitle_details'>(in order of their appearance in table of contents)</p>   <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/nynta_metadata.pdf' target='_blank'>• Neighborhood Tabulation Area: New York City Department of City Planning</a></p>   <p><a class='sources' href='http://www.nyc.gov/html/dcp/html/census/demo_tables_2010.shtml'  target='_blank'>•	Total Population in 200 and 2010 and change in total population U.S. Census Bureau; Census 2000, U.S. Census Bureau; Census 2010</a></p>   <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/meta_mappluto.pdf'  target='_blank'>•	Vacant Lots number and area / Commercial Uses: PLUTO 2013, New York City Department of City Planning, Information Technology Division</a></p>   <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/selfac_metadata.pdf'  target='_blank'>•	Elementary Schools, Middle and K8 Schools, High Schools, K12 Schools, Other School, All Schools: NYC Department of City Planning</a></p>   <p><a class='sources' href='http://nycdata.pediacities.com'  target='_blank'>•	Crime data: Ontodia, Inc. (extracted from NYPD dataset)</a></p>    <p><a class='sources' href='https://data.cityofnewyork.us/NYC-BigApps/NYPD-Motor-Vehicle-Collisions/h9gi-nx95'  target='_blank'>•	Motor Vehicle Collision Data: Police Department (NYPD) </a></p>     <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/selfac_metadata.pdf'  target='_blank'>•	School Capacity Data: Selected Facilities Dataset, New York City Department of City Planning</a></p>     <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/nycd_metadata.pdf?v=14d'  target='_blank'>•	Community Districts: New York City Department of City Planning</a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_B19013#main_content'  target='_blank'>•	Median Household Income: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates</a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_B25070#main_content'  target='_blank'>•	Rent Burdened Households: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates </a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_B25070#main_content'  target='_blank'>•	Severely Rent-Burdened Households: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates </a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_B03002#main_content'  target='_blank'>•	Percent Hispanic / Asian / Black / White Non-Hispanic: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates </a></p>   <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.DEC_10_SF1_SF1DP1#main_content'  target='_blank'>•	Percent Under 5 Years / 5-19 Years Old / 20-64 Years Old / Over 65 Years Old: U.S. Census Bureau; 2010 Census Summary File 1 </a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_B15003#main_content'  target='_blank'>• Educational Attainment:	Less than 12th Grade / High School Diploma or GED / Some College / Bachelor's Degree: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates</a></p>     <p><a class='sources' href='http://factfinder2.census.gov/faces/affhelp/jsf/pages/metadata.xhtml?lang=en&type=table&id=table.en.ACS_12_5YR_S2301#main_content'  target='_blank'>•	Percent Unemployment: U.S. Census Bureau; 2012 American Community Survey 5-Year Estimates </a></p>      <p><a class='sources' href='http://furmancenter.org/files/sotc/SOC2013_HighRes.pdf'  target='_blank'>•	Furman Center State of the Neighborhoods Data 2013: NYU Furman Center</a></p>     <p><a class='sources' href='http://furmancenter.org/files/sotc/SOC2012.pdf'  target='_blank'>•	Furman Center State of the Neighborhoods Data 2012: NYU Furman Center </a></p>      <p><a class='sources' href='http://www.fhwa.dot.gov/planning/census_issues/ctpp/'  target='_blank'>•	Commute Time: U.S. Census Bureau, American Community Survey 2006-2010 Five-year estimates. Special Tabulation: Census Transportation Planning </a></p>      <p><a class='sources' href='https://data.cityofnewyork.us/d/g84h-jbjm?category=Recreation&view_name=New-York-City-Open-Spaces-Parks'  target='_blank'>•	Parks larger than 8 acres: NYC Department of Parks and Recreation, NYC Department of Information Technology & Telecommunications </a></p>      <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/lion_metadata.pdf?v=14d'  target='_blank'>•	Bike Lanes / Truck Routes: LION NYC Street Dataset 2013, New York City Department of City Planning</a></p>      <p><a class='sources' href='http://www.fhwa.dot.gov/planning/census_issues/ctpp/'  target='_blank'>•	Job Locations and Number of Workers: U.S. Census Bureau, American Community Survey 2006-2010 Five-year estimates. Special Tabulation: Census Transportation Planning</a></p>      <p><a class='sources' href='http://www.referenceusa.com/Static/Home'  target='_blank'>•	Supermarkets over 10,000 Square Feet: ReferenceUSA Online Database </a></p>       <p><a class='sources' href='https://gis.ny.gov/gisdata/inventories/details.cfm?DSID=1097'  target='_blank'>•	Remediation Sites: NYS Department of Environmental Conservation </a></p>       <p><a class='sources' href='https://gis.ny.gov/gisdata/inventories/details.cfm?DSID=1253'  target='_blank'>•	Chemical Bulk Storage: NYS Department of Environmental Conservation </a></p>      <p><a class='sources' href='http://schools.nyc.gov/Accountability/tools/report/ProgressReport_2007-2013.htm'  target='_blank'>•	Public and Charter Schools with DOE Ratings: NYC Department of Education </a></p>      <p><a class='sources' href='http://www.nyc.gov/html/dcp/pdf/bytes/selfac_metadata.pdf'  target='_blank'>•	Private Schools through Grade 12 / Colleges and Universities: New York City Department of City Planning </a></p>  "  ,
    //Add the geolocation button on the toolbar. Only displayed if browser supports geolocation
    "locate": true,
    //Specify a title for the application. If not provided the web map title is used.
    "title": "Neighborhood Data Portal",
    
    //This option demonstrates how to handle additional custom url parameters. For example
    //if you want users to be able to specify lat/lon coordinates that define the map's center or
    //specify an alternate basemap via a url parameter.
    "urlItems": [
        "extent,color"
    ],
    //Replace these with your own bitly key
    "bitlyLogin": "esrimarketing",
    "bitlyKey": "R_52f84981da0e75b23aea2b3b20cbafbc",
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});
