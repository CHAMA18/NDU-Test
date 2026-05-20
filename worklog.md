---
Task ID: 1
Agent: Main Agent
Task: Redesign Project Dashboard greeting section to reflect authenticated user name in an exceptional manner + Remove "Manage all single projects..." text on Android/iOS only

Work Log:
- Analyzed uploaded screenshot showing the Project Dashboard with "Manage all single projects..." text
- Read project_dashboard_mobile_shell.dart and project_dashboard_screen.dart to understand current greeting and description implementations
- Read FirebaseAuthService and UserService to understand available user data (displayName, photoURL, isAdmin)
- Designed and implemented `_PremiumUserGreeting` widget for mobile shell with:
  - Time-aware greeting (Good morning/afternoon/evening + firstName)
  - Dual-initials gradient avatar (up to 2 chars from first+last name)
  - Firebase photoURL support with fallback to initials
  - Plan badge (Pro Plan / Basic Plan) with icon
  - Online status indicator
  - Premium gradient card container with subtle shadows
- Designed and implemented `_DesktopPremiumGreeting` widget for desktop version with:
  - Same time-aware greeting and dual-initials avatar
  - Larger avatar (56x56) and greeting text
  - Plan badge + dashboard subtitle row
  - Online indicator + current date display
  - Premium card with gradient and shadows
- Removed "Manage all single projects..." description text on Android/iOS:
  - Mobile shell: Already wrapped in `if (kIsWeb)` - verified correct
  - Desktop screen: Wrapped the description Text in `if (kIsWeb)` condition
- Fixed pre-existing build error: Missing `NavigationContextService` import in program_dashboard_mobile_screen.dart
- Build verified successfully: `flutter build web --no-tree-shake-icons`

Stage Summary:
- Both mobile and desktop dashboard greetings now feature world-class personalized user greetings
- Description text removed on Android/iOS (kept on web) in both mobile shell and desktop views
- Build compiles and succeeds
