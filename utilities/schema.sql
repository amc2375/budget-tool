/* create schema */
CREATE SCHEMA IF NOT EXISTS bronx;

/* create new table of districts */
DROP TABLE IF EXISTS bronx.districts;
CREATE SEQUENCE IF NOT EXISTS district_sequence_id;
CREATE TABLE bronx.districts (
	"id" int4 NOT NULL DEFAULT nextval('district_sequence_id'::regclass),
	"district_id" int4,
	"name" text NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id")
);

/* create district entities */
INSERT INTO bronx.districts (district_id, name) VALUES (8, 'Ayala');
INSERT INTO bronx.districts (district_id, name) VALUES (11, 'Dinowitz');
INSERT INTO bronx.districts (district_id, name) VALUES (12, 'Riley');
INSERT INTO bronx.districts (district_id, name) VALUES (13, 'Gjonaj');
INSERT INTO bronx.districts (district_id, name) VALUES (14, 'Cabrera');
INSERT INTO bronx.districts (district_id, name) VALUES (15, 'Feliz');
INSERT INTO bronx.districts (district_id, name) VALUES (16, 'Gibson');
INSERT INTO bronx.districts (district_id, name) VALUES (17, 'Salamanca Jr.');
INSERT INTO bronx.districts (district_id, name) VALUES (18, 'Ruben Diaz Sr.');

/* create the table of categories */
DROP TABLE IF EXISTS bronx.categories;
CREATE SEQUENCE IF NOT EXISTS category_sequence_id;
CREATE TABLE bronx.categories (
	"id" int4 NOT NULL DEFAULT nextval('category_sequence_id'::regclass),
	"name" text NOT NULL,
	"descriptive_html" text NOT NULL,
	"amount" numeric NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id")
);

/* create new table of links to accompany categories */
DROP TABLE IF EXISTS bronx.category_links;
CREATE SEQUENCE IF NOT EXISTS category_link_sequence_id;
CREATE TABLE bronx.category_links (
	"id" int4 NOT NULL DEFAULT nextval('category_link_sequence_id'::regclass),
	"name" text NOT NULL,
	"url" text NOT NULL,
	"category_id" int NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id"),
	FOREIGN KEY (category_id) REFERENCES bronx.categories(id) ON DELETE CASCADE
)

/* create new table of 'context' rows with an amount and description */
DROP TABLE IF EXISTS bronx.category_contexts;
CREATE SEQUENCE IF NOT EXISTS category_context_sequence_id;
CREATE TABLE bronx.category_contexts (
	"id" int4 NOT NULL DEFAULT nextval('category_context_sequence_id'::regclass),
	"amount" numeric NOT NULL,
	"description" text NOT NULL,
	"category_id" int NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ("id"),
	FOREIGN KEY (category_id) REFERENCES bronx.categories(id) ON DELETE CASCADE
)

/* insert each required category using foreign keys to identify related links and contexts */

/*********** education ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	1,
	'Education',
	32000000000.00,
	'The Department of Education (DOE) funds public and charter schools, prekindergarten programs, and afterschool care (sports, music, other educational programming).'
);

/* education context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'One year of school supplies for ~14,000 students',
	1
);

/* education context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'~2.5 months of funding for universal pre-K',
	1
);

/* education link */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Education (DOE)',
	'https://www.schools.nyc.gov/',
	1
);





/*********** CUNY ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	2,
	'CUNY',
	1000000000.00,
	'In addition to DOE spending, education spending also includes funding for the system of 25 colleges across the City that make up City University of New York (CUNY).'
);

/* CUNY context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'Average financial aid for ~1,150 first-year students at CUNY-Queens College',
	2
);

/* CUNY context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'4-years, free in-state tuition for ~3,607 students',
	2
);

/* CUNY link */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'City University of New York',
	'https://www.cuny.edu/',
	2
);





/*********** social services ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	3,
	'Social Services',
	17000000000.00,
	'Social Services spending includes funding a number of City agencies that provide human services and assistance. Included in this category are the budgets for New York City Department of Veteran Services, Administration for Children’s Services (ACS), NYC Department of Social Services (DSS), Department of Homeless Services (DHS), Department for the Aging, Financial Information Services Agency, NYC Commission on Human Rights and the Department on Youth and Community Development.'
);

/* social services context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'One year of Home Energy Assistance Program funding',
	3
);

/* social services context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'213 homeless family shelter units for a year (about 1 percent of the average annual cost of sheltering families)',
	3
);

/* social services link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'New York City Department of Veteran Services',
	'https://www1.nyc.gov/site/veterans/about/about.page',
	3
);

/* social services link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	"Administration for Children's Services",
	'https://www1.nyc.gov/site/acs/about/about.page',
	3
);

/* social services link 3 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Department of Social Services',
	'https://www1.nyc.gov/site/dss/index.page',
	3
);

/* social services link 4 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Homeless Services',
	'https://www1.nyc.gov/site/dhs/index.page',
	3
);

/* social services link 5 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department for the Aging',
	'https://www1.nyc.gov/site/dfta/index.page',
	3
);

/* social services link 6 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Financial Information Services Agency',
	'https://www.dnb.com/business-directory/company-profiles.new_york_city_financial_information_services_agency.07ef035f503b11f3.html',
	3
);

/* social services link 7 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Commission on Human Rights',
	'https://www1.nyc.gov/site/cchr/index.page',
	3
);

/* social services link 8 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department on Youth and Community Development',
	'https://www1.nyc.gov/site/dycd/index.page',
	3
);



/*********** police and corrections ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	4,
	'Police and Corrections',
	7000000000.00,
	'The Police Department of the CIty of New York (NYPD) enforces the law, maintains public order, and investigates crimes. Spending in this category also includes funding for the NYC Department of Corrections and District Attorney’s Offices.'
);

/* police and corrections context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'Salary of ~5 police captains',
	4
);

/* police and corrections context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'1.7 days of incarcerating the average daily population of 9,790 inmates in city jails',
	4
);

/* police and corrections link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Police Department of the CIty of New York (NYPD)',
	'https://www1.nyc.gov/site/nypd/index.page',
	4
);

/* police and corrections link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Department of Corrections',
	'https://www1.nyc.gov/site/doc/index.page',
	4
);

/* police and corrections link 3 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'District Attorney’s Offices',
	'https://www.manhattanda.org/about-the-office/',
	4
);





/*********** general government ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	5,
	'General Government',
	4000000000.00,
	'The General Government consists of the NYC Office of the Mayor and various administrative departments in the city. It also includes NYC Community Boards, Offices of the Borough Presidents, and NYC City Council.'
);

/* general government context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'One year of supplies for the office of the Manhattan borough president',
	5
);

/* general government context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'Half a year of funding for Office of Labor Relations (negotiates with labor unions)',
	5
);

/* general government link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Office of the Mayor',
	'https://www1.nyc.gov/office-of-the-mayor/',
	5
);

/* general government link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Community Boards',
	'https://www1.nyc.gov/site/cau/community-boards/community-boards.page',
	5
);

/* general government link 3 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Offices of the Borough Presidents',
	'http://bronxboropres.nyc.gov/',
	5
);

/* general government link 4 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC City Council',
	'https://council.nyc.gov/',
	5
);





/*********** health and hospitals ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	6,
	'Health and Hospitals',
	3000000000.00,
	'The New York City Department of Health and Mental Hygiene (DOH) provides a range of services including health inspections, licensing and no cost health clinics as well as public health research and response.  New York Health + Hospital Corps (HHC) is a public healthcare system that includes: acute hospital centers, long term care facilities, and numerous clinics.'
);

/* health and hospitals context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'~6 months of funding for Office of the Chief Medical Examiner',
	6
);

/* health and hospitals context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'~4 months of funding for early intervention',
	6
);

/* health and hospitals context 3 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000000,
	'Cost of building ~1,600,000 sq feet of new hospital space in underserved neighborhoods',
	6
);

/* health and hospitals link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Health and Mental Hygiene (DOH)',
	'https://www1.nyc.gov/site/doh/index.page',
	6
);

/* health and hospitals link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'New York Health + Hospital Corps (HHC)',
	'https://www.nychealthandhospitals.org/',
	6
);





/*********** sanitation ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	7,
	'Sanitation',
	2000000000.00,
	'The NYC Department of Sanitation (DSNY) is the world’s largest sanitation department. DSNY collects more than 10,500 tons of residential and institutional garbage and 1,760 tons of the recyclables – each day.'
);


/* sanitation context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'Disposal of trash produced by New Yorkers in ~1 day',
	7
);

/* sanitation context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'9 days of disposal of residential garbage',
	7
);

/* sanitation link */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'NYC Department of Sanitation',
	'https://www1.nyc.gov/assets/dsny/site/home',
	7
);





/*********** environmental protection ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
	context_description_3
) VALUES (
	8,
	'Environmental Protection',
	1500000000.00,
	'The Department of Environmental Protection (DEP) is responsible for upkeep of water mains and sewers and conducting projects to ensure water quality and conservation as well as control water pollution. DEP works with multiple City agencies to construct, install, and maintain various green Infrastructure projects for stormwater capture. The department works to supply clean drinking water, collects and treats wastewater, and reduces air, noise, and hazardous substances pollution.'
);

/* environmental protection context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'Green retrofitting of ~288 average-sized NY apartments',
	8
);

/* environmental protection context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'9.7 billion gallons of wastewater treated (about 2 percent of wastewater treated annually) ',
	8
);

/* environmental protection context 3 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'~1 year of heat, light, and power for the department',
	8
);

/* environmental protection link */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Environmental Protection (DEP)',
	'https://www1.nyc.gov/site/dep/index.page',
	8
);





/*********** city planning, housing, and urban development ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	9,
	'City Planning, Housing, and Urban Development',
	1500000000.00,
	"The Department of Housing Preservation and Development (HPD) promotes the quality and affordability of the city's housing and the strength and diversity of its many neighborhoods. The agency preserves and builds affordable housing and protects tenants. It enforces the building code and engages in neighborhood planning. The Department of City Planning (DCP) is New York City’s primary land use agency and is instrumental in designing the City’s physical and socioeconomic framework. This budget line also includes funding for the New York City Department of Buildings (DOB) and the Landmarks Preservation Commission  that protects New York City's architecturally, historically, and culturally significant buildings and sites by granting them landmark or historic district status, and regulating them after designation."
);

/* city planning, housing, and urban development context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'Annual rent for about 155 one-bedroom affordable housing units',
	9
);

/* city planning, housing, and urban development context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'Office of Housing Preservation general maintenance and repair for one year',
	9
);

/* city planning, housing, and urban development link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Housing Preservation and Development (HPD)',
	'https://www1.nyc.gov/site/hpd/about/about-hpd.page',
	9
);

/* city planning, housing, and urban development link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of City Planning (DCP)',
	'https://www1.nyc.gov/site/planning/about/department.page',
	9
);

/* city planning, housing, and urban development link 3 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Buildings',
	'https://www1.nyc.gov/site/buildings/index.page',
	9
);

/* city planning, housing, and urban development link 4 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Landmarks Preservation Commission',
	'https://www1.nyc.gov/site/lpc/index.page',
	9
);





/*********** libraries, recreation, culture ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	10,
	'Libraries, Recreation, and Culture',
	 1000000000.00,
	 "The Department of Cultural Affairs (DCLA), and  Departments of Parks and Recreation, maintain and promote museum and cultural institutions, public parks, community programs, and other neighborhood- strengthening services. With nearly 53 million items and 92 locations, the New York Public Library is the second largest public library in the United States and the third largest in the world.  Libraries allow people to borrow books and other materials, have access to wifi and technology (such as computers and printers). They provide assistance through workshops, public programming and research services."
);

/* libraries, recreation, and culture context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'NYPL consulting services for about one year',
	10
);

/* libraries, recreation, and culture context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'952 summer pool and beach season lifeguards (68 percent of seasonal lifeguards)',
	10
);

/* libraries, recreation, and culture link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Cultural Affairs (DCLA)',
	'https://www1.nyc.gov/site/dcla/index.page',
	10
);

/* libraries, recreation, and culture link 2 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Departments of Parks and Recreation',
	'https://www.nycgovparks.org/',
	10
);

/* libraries, recreation, and culture link 3 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'New York Public Library',
	'https://www.nypl.org/',
	10
);





/*********** fire ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	11,
	'Fire',
	 2000000000.00,
	 "The Fire Department of the City of New York (FDNY) provides fire suppression and prevention services, along with emergency rescue/medical response."
);

/* fire context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'7 ladder trucks',
	11
);

/* fire context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'~4 months of funding for emergency medical services',
	11
);

/* fire context 3 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000000,
	'Yearly salary for ~22,125 firefighters',
	11
);

/* fire link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Fire Department of the City of New York (FDNY)',
	'https://www1.nyc.gov/site/fdny/about/overview/overview.page',
	11
);





/*********** transportation ***********/
INSERT INTO bronx.categories (
	id,
	name,
	amount,
	descriptive_html
) VALUES (
	12,
	'Transportation',
	 1000000000.00,
	 "The Department of Transportation (DOT) plans, builds, and maintains the city's overall transportation system infrastructure, which includes streets, bike lanes, highways, and bridges. The department continually works to improve traffic mobility and generally reduce congestion throughout the city, while also conducting traffic safety educational programs. The MTA is funded through a combination of the State of New York, tolls and farebox revenue."
);

/* transportation context 1 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	1000000,
	'~1.67 miles of new protected bike lanes',
	12
);

/* transportation context 2 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	10000000,
	'~1 year of motor vehicle fuel for DOT operations',
	12
);

/* transportation context 3 */
INSERT INTO bronx.category_contexts (
	amount,
	description,
	category_id
) VALUES (
	100000000,
	'1 year of supplies for highway operations',
	12
);

/* transportation link 1 */
INSERT INTO bronx.category_links (
	name,
	url,
	category_id
) VALUES (
	'Department of Transportation (DOT)',
	'https://www.transportation.gov/',
	12
);

/* create the budget table to hold user submission data */
DROP TABLE IF EXISTS bronx.budget;
CREATE SEQUENCE IF NOT EXISTS budget_sequence_id;
CREATE TABLE bronx.budget (
	"id" int4 NOT NULL DEFAULT nextval('budget_sequence_id'::regclass),
	"submission_id" text NOT NULL,
	"district_id" int4,
	"zip_code" numeric,
	"budget_familiarity" int4,
	"category_id" int4 NOT NULL,
	"category_value" numeric NOT NULL,
	"created_at" timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "district_constraint_id" FOREIGN KEY ("district_id") REFERENCES "bronx"."districts"("id") ON DELETE CASCADE,
	CONSTRAINT "category_constraint_id" FOREIGN KEY ("category_id") REFERENCES "bronx"."categories"("id") ON DELETE CASCADE,
	PRIMARY KEY ("id")
)
