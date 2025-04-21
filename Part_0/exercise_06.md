    sequenceDiagram - https://studies.cs.helsinki.fi/exampleapp/spa - SPA new note creation
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
                      Payload {content: "©", date: "2025-04-21T16:35:37.063Z"}
    activate server
    server-->>  response: 201 Created
                {"message":"note created"}
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content": "Amit","date": "2025-04-21T11:25:24.080Z"}, ... ]
    deactivate server