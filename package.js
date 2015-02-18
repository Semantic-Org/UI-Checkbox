var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-checkbox',
  summary : 'Semantic UI - Checkbox (official): Single component release of checkbox',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Checkbox.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
