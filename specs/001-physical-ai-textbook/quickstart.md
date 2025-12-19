# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Development Environment Setup

### Prerequisites
- Python 3.11+
- Node.js 18+
- Git
- Docker (optional, for local database setup)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd physical-ai-humanoid-robotics-hackathon-1
   ```

2. **Set up backend environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up frontend environment**
   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**
   Create `.env` files in both backend and frontend directories:

   **Backend (.env)**:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/textbook
   NEON_DATABASE_URL=your_neon_connection_string
   QDRANT_URL=your_qdrant_url
   QDRANT_API_KEY=your_qdrant_api_key
   OPENAI_API_KEY=your_openai_api_key
   SECRET_KEY=your_secret_key
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```

   **Frontend (.env)**:
   ```env
   REACT_APP_API_URL=http://localhost:8000
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

5. **Run database migrations**
   ```bash
   cd backend
   alembic upgrade head
   ```

6. **Start the development servers**

   **Backend**:
   ```bash
   cd backend
   uvicorn src.main:app --reload --port 8000
   ```

   **Frontend**:
   ```bash
   cd frontend
   npm start
   ```

## Project Structure Overview

```
physical-ai-humanoid-robotics-hackathon-1/
├── backend/
│   ├── src/
│   │   ├── models/          # Database models
│   │   ├── services/        # Business logic
│   │   ├── api/            # API routes
│   │   ├── database/       # Database configuration
│   │   └── vector_store/   # Qdrant integration
│   ├── tests/
│   ├── requirements.txt
│   └── alembic/
├── frontend/
│   ├── docs/              # Textbook content
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   └── services/     # API service functions
│   ├── static/
│   └── package.json
└── specs/                # Project specifications
```

## Key Components

### 1. Authentication System
- User registration with background assessment
- JWT-based authentication
- Role-based access control

### 2. Content Management
- Docusaurus-based content delivery
- Markdown-based curriculum structure
- Interactive elements support

### 3. Personalization Engine
- Expertise level detection
- Adaptive content delivery
- Learning path customization

### 4. RAG Chatbot
- OpenAI integration for question answering
- Qdrant vector database for context retrieval
- Conversation history management

### 5. Assessment System
- Quiz and exercise management
- Automated grading
- Progress tracking

## Running Tests

### Backend Tests
```bash
cd backend
pytest tests/
```

### Frontend Tests
```bash
cd frontend
npm test
```

### End-to-End Tests
```bash
cd frontend
npm run test:e2e
```

## API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/assessment` - Background assessment

### Content
- `GET /content/modules` - List all modules
- `GET /content/modules/{module_id}` - Get specific module
- `GET /content/progress/{student_id}` - Get user progress

### Chatbot
- `POST /chatbot/query` - Submit question to chatbot
- `GET /chatbot/history/{student_id}` - Get conversation history

### Assessments
- `GET /assessments/{module_id}` - Get assessments for module
- `POST /assessments/submit` - Submit assessment answers
- `GET /assessments/results/{student_id}` - Get assessment results

## Database Schema

The database contains tables for users, modules, assessments, interactive elements, and learning paths. See `backend/src/models/` for detailed model definitions.

## Vector Store Setup

The Qdrant vector database stores textbook content for RAG functionality:
- Collection: `textbook_content`
- Vector size: 1536 (OpenAI embeddings)
- Similarity: cosine
- Payload: module_id, content_type, content_path

## Deployment

### Frontend (GitHub Pages)
```bash
cd frontend
npm run build
npm run deploy
```

### Backend (Cloud Platform)
1. Set up environment variables in your cloud platform
2. Deploy the FastAPI application
3. Configure domain and SSL certificate
4. Set up monitoring and logging

## Troubleshooting

### Common Issues

1. **Database connection errors**: Verify your Neon Postgres connection string and credentials
2. **API rate limits**: Check your OpenAI API key and usage limits
3. **Vector store errors**: Ensure Qdrant is properly configured and accessible
4. **Frontend build failures**: Clear npm cache with `npm cache clean --force`

### Development Tips

- Use `npm run dev` for frontend development with hot reloading
- Enable FastAPI's debug mode with `--debug` flag
- Monitor database connections to prevent pool exhaustion
- Test with different expertise levels to verify personalization