CREATE TABLE "user" (
	"intra_no"	BIGINT	NOT NULL	,
	"intra_id"	VARCHAR	NOT NULL	DEFAULT 'NOT_EXIST',
	"name"	VARCHAR	NOT NULL	DEFAULT 'NO_NAME'	,
	"grade"	VARCHAR	NOT NULL	DEFAULT '9999',
	"start_process"	DATE	NOT NULL	DEFAULT '9999-12-31'	,
	"coalition"	VARCHAR	NULL	,
	"academic_state"	VARCHAR	NOT NULL	DEFAULT 'BLACK_HOLE	'
);

CREATE TABLE "user_personal_information" (
	"intra_no"	BIGINT	NOT NULL,
	"region"	VARCHAR	NULL,
	"gender"	VARCHAR	NULL,
	"date"	DATE	NULL,
	"phone_number"	VARCHAR	NULL,
	"email"	VARCHAR	NULL
);

CREATE TABLE "user_process_progress" (
	"pk"	VARCHAR(255)	NOT NULL,
	"intra_no"	BIGINT	NOT NULL,
	"basic_expiration_date"	DATE	NOT NULL	DEFAULT '9999-12-31',
	"request_extension_"	VARCHAR	NULL,
	"final_expiration_date"	DATE	NOT NULL	DEFAULT '9999-12-31',
	"Field"	CHAR	NOT NULL	DEFAULT 'Y'
);

CREATE TABLE "user_learning_date" (
	"pk"	VARCHAR(255)	NULL	,
	"coalition_score"	INT	NOT NULL	DEFAULT '0',
	"out_circle"	CHAR	NOT NULL	DEFAULT 'N',
	"out_circle_date"	DATE	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_access_card_information" (
	"intra_no"	BIGINT	NOT NULL,
	"profile_picture"	VARCHAR	NULL	,
	"lapiscine_access_card_number_of_physical"	INT	NULL	,
	"lapiscine_access_card_number_of_logical"	INT	NULL	,
	"logical_number_of_access_card_for_this_course"	INT	NULL	,
	"Name_of_entry_card_for_this_course"	VARCHAR	NULL	
);

CREATE TABLE "user_leave_of_absence" (
	"pk"	VARCHAR(255)	NOT NULL,
	"start_absence_date"	DATE	NULL,
	"end_absence_date"	DATE	NULL,
	"return_from_absence_date"	DATE	NULL,
	"absence_reason"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_reason_of_break" (
	"pk"	VARCHAR(255)	NOT NULL,
	"date_of_break"	DATE	NULL,
	"reason_of_break"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_lapiscine_information_management" (
	"pk"	VARCHAR(255)	NOT NULL,
	"lapiscine_grade"	SMALLINT	NOT NULL	DEFAULT '9999',
	"lapiscine_degree"	smallint	NOT NULL	DEFAULT '9999',
	"participate_lapicin"	DATE	NOT NULL	DEFAULT '9999-12-31',
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_other_information" (
	"pk"	VARCHAR(255)	NOT NULL,
	"highest_level_of_education"	VARCHAR	NULL,
	"major"	VARCHAR	NOT NULL	DEFAULT '비전공',
	"major_field"	VARCHAR	NULL,
	"major_name"	VARCHAR	NULL,
	"period_of_software_learning"	VARCHAR	NULL,
	"experience_of_software_developing"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_education_fund_state" (
	"pk"	VARCHAR(255)	NOT NULL,
	"total_payment_of_number"	INT	NOT NULL	DEFAULT '0'	,
	"total_payment_of_money"	INT	NOT NULL	DEFAULT '0',
	"fund_date"	DATE	NULL	,
	"remaining_date_of_fund"	SMALLINT	NULL	,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_employment_and_found" (
	"pk"	VARCHAR(255)	NOT NULL,
	"employment"	CHAR	NULL,
	"employment_date"	DATE	NULL,
	"enterprise"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_computation_fund" (
	"pk"	VARCHAR(255)	NOT NULL,
	"no_duplicate_collection"	CHAR	NOT NULL	DEFAULT 'N',
	"reason_of_no_duplicate"	VARCHAR	NULL,
	"received_fund"	CHAR	NOT NULL	DEFAULT 'N',
	"recevied_grant_amount"	INT	NOT NULL	DEFAULT '0',
	"intra_no"	BIGINT	NOT NULL,
	"payment_date"	DATE	NULL
);

CREATE TABLE "user_intern_status" (
	"pk"	VARCHAR(255)	NOT NULL,
	"start_intern_date"	DATE	NULL,
	"end_intern_date"	DATE	NULL,
	"enterprise"	VARCHAR	NULL,
	"intern_part_of_job"	VARCHAR	NULL,
	"intern_blackhole"	CHAR	NULL,
	"intern_blackhole_date"	SMALLINT	NULL,
	"intern_note"	VARCHAR(100)	NULL,
	"intra_no2"	BIGINT	NOT NULL
);

CREATE TABLE "user_hrd_net_utilize" (
	"pk"	VARCHAR(255)	NOT NULL,
	"consent_to_provide_information"	CHAR	NOT NULL	DEFAULT 'N',
	"employment_insurance_date"	DATE	NULL,
	"enterprise_size"	VARCHAR	NULL,
	"enterprise"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_employment_status" (
	"pk"	BIGINT	NOT NULL,
	"emplyment_date"	DATE	NULL,
	"enterprise"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

CREATE TABLE "user_blackhole" (
	"pk"	VARCHAR(255)	NOT NULL,
	"remaining_period"	SMALLINT	NOT NULL	DEFAULT '0',
	"blackhole_time"	DATE	NOT NULL	DEFAULT '9999-12-31',
	"reason_of_blackhole"	VARCHAR	NULL,
	"intra_no"	BIGINT	NOT NULL
);

ALTER TABLE "user" ADD CONSTRAINT "PK_USER" PRIMARY KEY (
	"intra_no"
);

ALTER TABLE "user_personal_information" ADD CONSTRAINT "PK_USER_PERSONAL_INFORMATION" PRIMARY KEY (
	"intra_no"
);

ALTER TABLE "user_process_progress" ADD CONSTRAINT "PK_USER_PROCESS_PROGRESS" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_learning_date" ADD CONSTRAINT "PK_USER_LEARNING_DATE" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_access_card_information" ADD CONSTRAINT "PK_USER_ACCESS_CARD_INFORMATION" PRIMARY KEY (
	"intra_no"
);

ALTER TABLE "user_leave_of_absence" ADD CONSTRAINT "PK_USER_LEAVE_OF_ABSENCE" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_reason_of_break" ADD CONSTRAINT "PK_USER_REASON_OF_BREAK" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_lapiscine_information_management" ADD CONSTRAINT "PK_USER_LAPISCINE_INFORMATION_MANAGEMENT" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_other_information" ADD CONSTRAINT "PK_USER_OTHER_INFORMATION" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_education_fund_state" ADD CONSTRAINT "PK_USER_EDUCATION_FUND_STATE" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_employment_and_found" ADD CONSTRAINT "PK_USER_EMPLOYMENT_AND_FOUND" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_computation_fund" ADD CONSTRAINT "PK_USER_COMPUTATION_FUND" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_intern_status" ADD CONSTRAINT "PK_USER_INTERN_STATUS" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_hrd_net_utilize" ADD CONSTRAINT "PK_USER_HRD_NET_UTILIZE" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_employment_status" ADD CONSTRAINT "PK_USER_EMPLOYMENT_STATUS" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_blackhole" ADD CONSTRAINT "PK_USER_BLACKHOLE" PRIMARY KEY (
	"pk"
);

ALTER TABLE "user_personal_information" ADD CONSTRAINT "FK_user_TO_user_personal_information_1" FOREIGN KEY (
	"intra_no"
)
REFERENCES "user" (
	"intra_no"
);

ALTER TABLE "user_access_card_information" ADD CONSTRAINT "FK_user_TO_user_access_card_information_1" FOREIGN KEY (
	"intra_no"
)
REFERENCES "user" (
	"intra_no"
);

