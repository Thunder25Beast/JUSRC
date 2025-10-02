# JUSRC Documents Organization

This folder contains all downloadable documents for the JIPMER Undergraduate Scientific Research Club (JUSRC) portal.

## Folder Structure

```
public/documents/
├── grants/                 # Grant-related documents
│   ├── iap/               # IAP Grant documents
│   ├── icmr/              # ICMR Grant documents (future)
│   ├── dst/               # DST Grant documents (future)
│   └── other/             # Other grant documents
├── proposals/             # Research proposal templates and examples
├── guidelines/            # Institutional guidelines and policies
├── forms/                 # Application forms and templates
└── resources/            # General research resources
```

## Document Categories

### 1. Grants (`/grants/`)
- **IAP Grants** (`/grants/iap/`): Indian Academy of Pediatrics grant documents
- **ICMR Grants** (`/grants/icmr/`): Indian Council of Medical Research grants
- **DST Grants** (`/grants/dst/`): Department of Science and Technology grants
- **Other Grants** (`/grants/other/`): Miscellaneous funding opportunities

### 2. Proposals (`/proposals/`)
- Research proposal templates
- Sample successful proposals
- Proposal writing guidelines

### 3. Guidelines (`/guidelines/`)
- Institutional research policies
- Ethical guidelines
- Publication guidelines
- Research conduct policies

### 4. Forms (`/forms/`)
- Application forms
- Registration forms
- Evaluation forms
- Feedback forms

### 5. Resources (`/resources/`)
- Research tools and software guides
- Statistical analysis resources
- Reference materials
- Training materials

## Adding New Documents

1. **Choose the right category**: Place documents in the appropriate category folder
2. **Use clear naming**: Use descriptive, consistent file names
3. **Update the document manager**: Add document metadata to `client/src/utils/documentManager.ts`
4. **Include metadata**: Title, description, file size, upload date, tags

## File Naming Convention

- Use descriptive names: `IAP_Grant_Guidelines_2024.pdf`
- Include year/version when applicable
- Use underscores instead of spaces
- Keep extensions lowercase: `.pdf`, `.docx`, `.xlsx`

## Supported File Types

- **PDF**: Primary format for most documents
- **Word**: `.docx` for editable templates
- **Excel**: `.xlsx` for data collection templates
- **PowerPoint**: `.pptx` for presentation templates

## Security Considerations

- All documents in this folder are publicly accessible
- Do not store sensitive or confidential information
- Use appropriate file permissions
- Regular security audits recommended

## Integration

Documents are integrated into the portal through:
- `DocumentVault` component for browsing
- `documentManager.ts` utility for management
- Download tracking and analytics
- Search functionality across all documents