// these are JSON mocks of bcdi.districts objects
export const BRONX_COUNCIL_DISTRICTS = [
  {
    id: 1,
    district_id: 8,
    name: "Ayala"
  },
  {
    id: 2,
    district_id: 11,
    name: "Dinowitz"
  },
  {
    id: 3,
    district_id: 12,
    name: "Riley"
  },
  {
    id: 4,
    district_id: 13,
    name: "Gjonaj"
  },
  {
    id: 5,
    district_id: 14,
    name: "Cabrera"
  },
  {
    id: 6,
    district_id: 15,
    name: "Feliz"
  },
  {
    id: 7,
    district_id: 16,
    name: "Gibson"
  },
  {
    id: 8,
    district_id: 17,
    name: "Salamanca Jr."
  },
  {
    id: 9,
    district_id: 18,
    name: "Ruben Diaz Sr."
  },
  {
    id: 10,
    name: "NYC - prefer not to say"
  },
  {
    id: 11,
    name: "Outside NYC"
  },
];

// these are JSON mocks of bcdi.categories objects
export const BRONX_FY2022_BUDGET = [
  {
    id: 1,
    name: "Debt Service",
    descriptive_html: '<p>The payment of interest and principal on debt outstanding.</p>',
    amount: 0.00,
    percentage_of_total: 0.0
  },
  {
    id: 2,
    name: "General Government",
    descriptive_html: '<p>The General Government consists of the <a href="https://www1.nyc.gov/office-of-the-mayor/"  target="_blank" rel="noreferrer noopener">NYC Office of the Mayor</a> and various administrative departments in the city. It also includes <a href="https://www1.nyc.gov/site/cau/community-boards/community-boards.page" target="_blank" rel="noreferrer noopener">NYC Community Boards</a>, <a href="http://bronxboropres.nyc.gov/" target="_blank" rel="noreferrer noopener">Offices of the Borough Presidents</a>, and <a href="https://council.nyc.gov/" target="_blank" rel="noreferrer noopener">NYC City Council</a>.</p>',
    amount:  3759550000.00,
    percentage_of_total: 5.32
  },
  {
    id: 3,
    name: "Education",
    descriptive_html: '<p>The <a href="https://www.schools.nyc.gov/" target="_blank"rel="noreferrer noopener">Department of Education (DOE)</a> funds public and charter schools, prekindergarten programs, and afterschool care (sports, music, other educational programming). Education spending also includes funding for the system of 25 colleges across the City that make up <a href="https://www.cuny.edu/" target="_blank" rel="noreferrer noopener">City University of New York</a> (CUNY). </p>',
    amount:  32619887000.00 ,
    percentage_of_total: 44.29
  },
  {
    id: 4,
    name: "Libraries",
    descriptive_html: '<p>With nearly 53 million items and 92 locations, the <a href="https://www.nypl.org/" target="_blank" rel="noreferrer noopener">New York Public Library</a> is the second largest public library in the United States and the third largest in the world. Libraries allow people to borrow books and other materials, have access to wifi and technology (such as computers and printers). They provide assistance through workshops, public programming and research services.</p>',
    amount: 405212000.00,
    percentage_of_total: 0.55
  },
  {
    id: 5,
    name: "Social Services",
    descriptive_html: '<p>Social Services spending includes funding a number of City agencies that provide human services and assistance. Included in this category are the budgets for <a href="https://www1.nyc.gov/site/veterans/about/about.page" target="_blank" rel="noreferrer noopener">New York City Department of Veteran Services</a>, <a href="https://www1.nyc.gov/site/acs/about/about.page" target="_blank" rel="noreferrer noopener">Administration for Children’s Services</a> (ACS), <a href="https://www1.nyc.gov/site/dss/index.page" target="_blank" rel="noreferrer noopener">NYC Department of Social Services</a> (DSS), <a href="https://www1.nyc.gov/site/dhs/index.page" target="_blank" rel="noreferrer noopener">Department of Homeless Services</a> (DHS), <a href="https://www1.nyc.gov/site/dfta/index.page" target="_blank" rel="noreferrer noopener">Department for the Aging</a>, <a href="https://www.dnb.com/business-directory/company-profiles.new_york_city_financial_information_services_agency.07ef035f503b11f3.html" target="_blank" rel="noreferrer noopener">Financial Information Services Agency</a>, <a href="https://www1.nyc.gov/site/cchr/index.page" target="_blank" rel="noreferrer noopener">NYC Commission on Human Rights</a> and the <a href="https://www1.nyc.gov/site/dycd/index.page" target="_blank" rel="noreferrer noopener">Department on Youth and Community Development</a>. </p>',
    amount: 17266632000.00 ,
    percentage_of_total: 23.44
  },
  {
    id: 6,
    name: "Police & Corrections",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/site/nypd/index.page" target="_blank" rel="noreferrer noopener">Police Department of the City of New York (NYPD)</a> enforces the law, maintains public order, and investigates crimes. Spending in this category also includes funding for the <a href="https://www1.nyc.gov/site/doc/index.page" target="_blank" rel="noreferrer noopener">NYC Department of Corrections</a>. </p>',
    amount: 7172404000.00,
    percentage_of_total: 9.74
  },
  {
    id: 7,
    name: "Transportation",
    descriptive_html: '<p>The <a href="https://www.transportation.gov/" target="_blank" rel="noreferrer noopener">Department of Transportation (DOT)</a> plans, builds, and maintains the city\'s overall transportation system infrastructure, which includes streets, bike lanes, highways, and bridges. The department continually works to improve traffic mobility and generally reduce congestion throughout the city, while also conducting traffic safety educational programs.',
    amount: 1299939000.00,
    percentage_of_total: 1.76
  },
  {
    id: 8,
    name: "Housing",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/site/hpd/about/about-hpd.page" target="_blank" rel="noreferrer noopener">Department of Housing Preservation and Development (HPD)</a> promotes the quality and affordability of the city\'s housing and the strength and diversity of its many neighborhoods. The agency preserves and builds affordable housing and protects tenants. It enforces the building code and engages in neighborhood planning. The <a href="https://www1.nyc.gov/site/planning/about/department.page" target="_blank" rel="noreferrer noopener">Department of City Planning (DCP)</a> is New York City’s primary land use agency and is instrumental in designing the City’s physical and socioeconomic framework. This budget line also includes funding for the New York City <a href="https://www1.nyc.gov/site/buildings/index.page" target="_blank" rel="noreferrer noopener">Department of Buildings (DOB)</a> and the <a href="https://www1.nyc.gov/site/lpc/index.page" target="_blank" rel="noreferrer noopener">Landmarks Preservation Commission</a> that protects New York City\'s architecturally, historically, and culturally significant buildings and sites by granting them landmark or historic district status, and regulating them after designation.</p>',
    amount: 1525290000.00 ,
    percentage_of_total: 2.07
  },
  {
    id: 9,
    name: "Health",
    descriptive_html: '<p>The New York City <a href="https://www1.nyc.gov/site/doh/index.page" target="_blank" rel="noreferrer noopener">Department of Health and Mental Hygiene (DOH)</a> provides a range of services including health inspections, licensing and no cost health clinics as well  public health research and response. <a href="https://www.nychealthandhospitals.org/" target="_blank" ref="noreferrer noopener">New York Health + Hospital Corps (HHC)</a> is a public healthcare system that includes 11 acute hospital centers, five long term care facilities and numerous clinics providing primary and specialized care. </p>',
    amount: 3118235000.00,
    percentage_of_total: 4.23
  },
  {
    id: 10,
    name: "Sanitation",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/assets/dsny/site/home" target="_blank" rel="noreferrer noopener">NYC Department of Sanitation (DSNY)</a> is the world’s largest sanitation department. DSNY collects more than 10,500 tons of residential and institutional garbage and 1,760 tons of the recyclables – each day. While efficiently managing solid waste and clearing litter or snow from 6,300 miles of streets, the Department is also a leader in environmentalism — committing to sending zero waste to landfills.</p>',
    amount: 1825604000.00,
    percentage_of_total: 2.48
  },
  {
    id: 11,
    name: "Environmental Protection",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/site/dep/index.page" target="_blank" ref="noreferrer noopener">Department of Environmental Protection (DEP)</a> is responsible for upkeep of water mains and sewers and conducting projects to ensure water quality and conservation as well as control water pollution. DEP  works with multiple City agencies to construct, install, and maintain various green Infrastructure projects for stormwater capture. The department works to supply clean drinking water, collects and treats wastewater, and reduces air, noise, and hazardous substances pollution. </p>',
    amount: 1519837000.00,
    percentage_of_total: 2.06
  },
  {
    id: 12,
    name: "Recreation & Culture",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/site/dcla/index.page" target="_blank" ref="noreferrer noopener">Department of Cultural Affairs (DCLA)</a>, and <a href="https://www.nycgovparks.org/" target="_blank" ref="noreferrer noopener">Departments of Parks and Recreation</a>, maintain and promote museum and cultural institutions, public parks, community programs, and other neighborhood-strengthening services.</p>',
    amount:  810997000.00,
    percentage_of_total: 1.10
  },
  {
    id: 13,
    name: "Pension & Fringe Benefits",
    descriptive_html: '<p>Pension and Fringe benefit charges pay for retirement benefits, health insurance, short-term disability insurance, mandatory life insurance, FICA and other benefits.</p>',
    amount: 0.00,
    percentage_of_total: 0.0
  },
  {
    id: 14,
    name: "Fire",
    descriptive_html: '<p>The <a href="https://www1.nyc.gov/site/fdny/about/overview/overview.page" target="_blank" rel="noreferrer noopener">Fire Department of the City of New York (FDNY)</a> provides fire suppression and prevention services, along with emergency rescue/medical response.</p>',
    amount: 2171878000.00,
    percentage_of_total: 2.95
  },
  {
    id: 15,
    name: "Misc",
    descriptive_html: '<p>Non-Departmental are funds set aside for other miscellaneous reasons.</p>',
    amount: 0.00,
    percentage_of_total: 0.0
  },
];
