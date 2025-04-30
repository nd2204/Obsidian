Final Year Project Report Structure: 3D Game Engine with Vulkan
This document outlines the structure for a final-year project report for a computer science major, focusing on the development of a basic 3D game engine using Vulkan. The structure is designed to meet academic standards, providing a clear, comprehensive narrative of the project’s motivation, methodology, implementation, and evaluation. Below, each section is described with guidance on content, including an introduction to the project and explanations of key decisions and technologies used.
Title Page

Content: 
Project title: "Development of a Basic 3D Game Engine Using Vulkan"
Student’s name
Supervisor’s name
University name
Date: April 2025


Purpose: Provides formal identification of the project and its context.

Abstract

Content: A concise summary (150-250 words) of the project, including:
Objective: Build a 3D game engine with Vulkan.
Methods: Use of Vulkan, ECS architecture, and multithreading.
Key outcomes: Functional engine rendering 3D scenes with user input and asset management.
Significance: Demonstrates graphics programming and software engineering skills.


Purpose: Offers a quick overview for readers to understand the project’s scope and results.

Acknowledgements

Content: Express gratitude to:
Supervisor for guidance.
Peers or family for support.
Any external resources (e.g., Vulkan tutorials).


Purpose: Recognizes contributions to the project’s success.

Table of Contents

Content: Lists all sections and subsections with page numbers.
Purpose: Facilitates navigation through the report.

List of Figures/Tables

Content: Enumerates figures (e.g., screenshots of rendered scenes) and tables (e.g., performance metrics).
Purpose: Helps readers locate visual or tabular data.

Chapter 1: Introduction

Content:
Background: Graphics programming is central to computer science, enabling applications like games and simulations. Vulkan, a modern rendering API, offers high performance and control compared to OpenGL.
Motivation: I chose to build a 3D game engine to master real-time graphics programming, apply software engineering principles (e.g., modularity, SOLID), and deepen computer science knowledge (e.g., linear algebra, concurrency). This project also serves as a portfolio piece to showcase technical expertise.
Objectives:
Develop a modular 3D game engine using Vulkan.
Implement an Entity-Component-System (ECS) architecture.
Use multithreading for rendering and logic separation.
Create flexible input and asset management systems.
Achieve a functional engine with acceptable performance.


Scope and Limitations: Focuses on core engine features (rendering, input, assets); excludes advanced features like physics or networking due to time constraints.
Report Structure: Overview of each chapter.


Purpose: Sets the context, justifies the project, and outlines its goals.

Chapter 2: Literature Review

Content:
Existing Game Engines: Overview of engines like Unity and Unreal, highlighting their architectures (e.g., component-based systems) and rendering approaches.
Rendering APIs: Comparison of OpenGL and Vulkan, emphasizing Vulkan’s performance and multi-threading capabilities (Vulkan Guide).
ECS Architecture: Discussion of ECS in game development, citing its use in engines like Unity (Unity ECS).
Relevant Technologies: Review of libraries like GLM, Assimp, and STB Image.
Gaps Addressed: Need for custom, lightweight engines for specific use cases, which this project explores.


Purpose: Positions the project within existing research and justifies technical choices.

Chapter 3: Methodology

Content:
Approach: Incremental development through stages (MVP, first scene, etc.).
Key Decisions and Justifications:
Vulkan: Chosen for its performance, multi-threading support, and explicit GPU control, ideal for learning modern graphics programming (Vulkan Tutorial).
ECS Architecture: Selected for modularity and performance, enabling efficient data access and scalability (Game Engine Architecture).
Multithreading: Implemented to leverage multi-core CPUs, improving frame rates by separating rendering and logic.
Input Handling: Device-agnostic design for flexibility, supporting keyboards, mice, and gamepads.
Asset Management: Custom system to optimize resource loading and caching.


Technologies Used:
Vulkan SDK: Core rendering API for GPU interaction.
C++: High-performance language for real-time applications.
GLM: Simplifies linear algebra operations (GLM).
Assimp: Loads 3D models from various formats (Assimp).
STB Image: Handles texture loading (STB).
ImGui: Provides a development GUI for debugging (ImGui).


Design Patterns: Use of SOLID principles and dependency injection for modularity.


Purpose: Explains the technical approach and justifies choices with reasoning and references.

Chapter 4: Implementation

Content:
Overview: Describes the development process across seven stages.
Stage Details (for each stage, e.g., MVP, First Scene, etc.):
Objectives: Specific goals (e.g., render a triangle in MVP).
Activities: Tasks completed, tools used (e.g., Vulkan SDK, C++).
Challenges: Technical issues (e.g., Vulkan synchronization).
Solutions: How issues were resolved (e.g., using validation layers).
Outcomes: Results (e.g., stable triangle rendering at 60 FPS).
Lessons Learned: Insights gained (e.g., importance of debugging tools).


Example (MVP Stage):
Initialized Vulkan, created a window, and rendered a triangle.
Challenges included complex Vulkan setup; resolved using tutorials.
Outcome: Stable rendering loop.
Code snippet: Vulkan pipeline creation.
Figure: Screenshot of triangle.




Purpose: Documents the development process, highlighting practical application of methodology.

Chapter 5: Results and Evaluation

Content:
Features Implemented: Rendering 3D scenes, input handling, asset management, basic lighting.
Performance Metrics:
Frame rate: ~60 FPS for a scene with 1000 objects.
Memory usage: ~500 MB for complex scenes.


Testing Methods: Unit tests for math utilities, integration tests for rendering pipeline, and performance benchmarks.
Evaluation: Comparison with objectives (e.g., achieved modular engine but limited advanced features).
User Feedback: If applicable (e.g., supervisor’s review).


Purpose: Assesses the project’s success and areas for improvement.

Chapter 6: Conclusion

Content:
Summary: Achieved a functional 3D game engine with Vulkan, meeting most objectives.
Reflection: Gained expertise in graphics programming and software engineering.
Limitations: Limited feature set due to time constraints.
Future Work: Add physics, networking, or an in-app editor.


Purpose: Wraps up the project and suggests next steps.

References

Content: List all sources in IEEE format, e.g.:
[1] Khronos Group, “Vulkan 1.3 Specification,” [Online]. Available: Vulkan.
[2] G. Nystrom, Game Engine Architecture, 3rd ed. CRC Press, 2018.


Purpose: Credits sources and supports academic integrity.

Appendices

Content: Code snippets, detailed test results, additional screenshots.
Purpose: Provides supplementary material for reference.

Table: Report Sections and Their Purposes



Section
Purpose



Title Page
Identifies the project and its context.


Abstract
Summarizes objectives, methods, and outcomes.


Acknowledgements
Recognizes contributions.


Table of Contents
Facilitates navigation.


Introduction
Sets context, outlines objectives, and motivates the project.


Literature Review
Positions the project within existing work and justifies choices.


Methodology
Explains technical approach and decisions.


Implementation
Details development process and stage outcomes.


Results and Evaluation
Assesses achievements and performance.


Conclusion
Summarizes findings and suggests future work.


References
Credits sources.


Appendices
Provides supplementary materials.


Guidance for Use

Content Development: Fill each section with project-specific details, using the stage reports from implementation as subsections in Chapter 4.
Visuals: Include screenshots, diagrams, and code snippets to support claims, especially in Implementation and Results.
Academic Tone: Maintain a formal, objective tone, citing sources where applicable.
Evaluation: Use quantitative metrics (e.g., FPS, memory usage) to strengthen the evaluation section.
Check Guidelines: Verify your university’s specific requirements for report formatting or additional sections.

This structure ensures a thorough, well-organized report that demonstrates technical competence, academic rigor, and reflective practice, suitable for a final-year computer science project.
