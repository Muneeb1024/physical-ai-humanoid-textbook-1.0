# Data Model: Physical AI & Humanoid Robotics Textbook

## Entity Models

### Student
**Description**: Represents the primary user of the textbook platform
**Fields**:
- id: UUID (Primary Key)
- email: String (Unique, Required)
- password_hash: String (Required, for authentication)
- expertise_level: Enum (beginner, intermediate, advanced)
- language_preference: String (default: 'en', options: 'en', 'ur')
- created_at: DateTime
- updated_at: DateTime
- last_login: DateTime
- progress_tracking: JSON (module completion status, assessment scores)
- background_assessment: JSON (initial questionnaire responses)

**Validation Rules**:
- Email must be valid format
- Password must meet security requirements
- Expertise level must be one of allowed values
- Language preference must be supported

### Module
**Description**: Represents a section of the curriculum
**Fields**:
- id: UUID (Primary Key)
- title: String (Required)
- module_number: Integer (1-4, Required)
- duration_weeks: Integer (default: 3-4 weeks)
- learning_objectives: Text Array (Required)
- content_path: String (Path to markdown content)
- prerequisites: UUID Array (References to other modules)
- created_at: DateTime
- updated_at: DateTime

**Validation Rules**:
- Module number must be between 1-4
- Title cannot be empty
- Content path must exist

### Assessment
**Description**: Represents evaluation content for modules
**Fields**:
- id: UUID (Primary Key)
- module_id: UUID (Foreign Key to Module)
- title: String (Required)
- assessment_type: Enum (quiz, exercise, project)
- questions: JSON (Array of question objects)
- passing_score: Integer (Percentage, default: 70)
- time_limit: Integer (Minutes, optional)
- created_at: DateTime
- updated_at: DateTime

**Validation Rules**:
- Module ID must reference existing module
- Assessment type must be valid
- Questions must be properly formatted

### AssessmentSubmission
**Description**: Represents a student's submission for an assessment
**Fields**:
- id: UUID (Primary Key)
- student_id: UUID (Foreign Key to Student)
- assessment_id: UUID (Foreign Key to Assessment)
- answers: JSON (Student responses)
- score: Integer (Percentage)
- completed_at: DateTime
- feedback: Text (Optional feedback from system)

**Validation Rules**:
- Student and assessment IDs must exist
- Score must be between 0-100

### InteractiveElement
**Description**: Represents embedded simulators, 3D models, and code examples
**Fields**:
- id: UUID (Primary Key)
- type: Enum (simulator, 3d_model, code_example)
- title: String (Required)
- content: Text (Code or configuration)
- parameters: JSON (Configuration options)
- module_id: UUID (Foreign Key to Module)
- created_at: DateTime
- updated_at: DateTime

**Validation Rules**:
- Type must be valid
- Content must be properly formatted based on type
- Module ID must exist

### LearningPath
**Description**: Represents personalized content delivery based on user expertise
**Fields**:
- id: UUID (Primary Key)
- student_id: UUID (Foreign Key to Student)
- module_id: UUID (Foreign Key to Module)
- difficulty_level: Enum (basic, standard, advanced)
- content_sequence: JSON (Ordered list of content items)
- created_at: DateTime
- updated_at: DateTime

**Validation Rules**:
- Student and module IDs must exist
- Difficulty level must be valid

### ChatbotQuery
**Description**: Represents user questions and AI responses
**Fields**:
- id: UUID (Primary Key)
- student_id: UUID (Foreign Key to Student, optional for anonymous)
- query: Text (Required)
- response: Text (Required)
- context_used: JSON (Content that informed the response)
- query_timestamp: DateTime
- response_quality: Integer (1-5 rating from user, optional)

**Validation Rules**:
- Query and response cannot be empty

### ContentVersion
**Description**: Tracks versions of textbook content for updates and rollbacks
**Fields**:
- id: UUID (Primary Key)
- module_id: UUID (Foreign Key to Module)
- version_number: String (Semantic versioning)
- content_hash: String (SHA-256 hash of content)
- content_path: String (Path to versioned content)
- created_at: DateTime
- created_by: UUID (Foreign Key to admin user)

**Validation Rules**:
- Version number must follow semantic versioning
- Content hash must be valid SHA-256

## Relationships

### Student ↔ AssessmentSubmission
- One-to-Many (Student can have multiple submissions)
- Foreign Key: student_id in AssessmentSubmission

### Module ↔ Assessment
- One-to-Many (Module can have multiple assessments)
- Foreign Key: module_id in Assessment

### Module ↔ InteractiveElement
- One-to-Many (Module can have multiple interactive elements)
- Foreign Key: module_id in InteractiveElement

### Student ↔ LearningPath
- One-to-Many (Student can have multiple learning paths)
- Foreign Key: student_id in LearningPath

### Module ↔ LearningPath
- One-to-Many (Module can have multiple learning paths)
- Foreign Key: module_id in LearningPath

### Student ↔ ChatbotQuery
- One-to-Many (Student can have multiple queries)
- Foreign Key: student_id in ChatbotQuery

## State Transitions

### Student Account States
- `registered` → `active` (After email verification)
- `active` → `suspended` (For policy violations)
- `suspended` → `active` (Admin override)

### Assessment States
- `not_started` → `in_progress` (Student begins assessment)
- `in_progress` → `completed` (Student submits answers)
- `completed` → `graded` (System grades assessment)

### Content States
- `draft` → `published` (Content is ready for students)
- `published` → `deprecated` (Content is outdated)
- `deprecated` → `archived` (Content is no longer accessible)