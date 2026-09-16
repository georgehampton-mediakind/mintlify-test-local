# Source: https://docs.mediakind.com/beam/system-admin/security/user-management

# User management

## Manage users

[Section titled “Manage users”](https://docs.mediakind.com/beam/system-admin/security/user-management/#manage-users)

Administrators have rights to create users and assign groups. User groups reflect different user roles with specific permissions. Permissions authorize access to applications, menus and features.

Menu options depend on your processing type and product installation.

### User groups

[Section titled “User groups”](https://docs.mediakind.com/beam/system-admin/security/user-management/#user-groups)

A user group is a set of access rights and permissions. Permissions authorize users to either display or edit configurations. Users are assigned to at least one user group. A user can be assigned to multiple groups.

New users are automatically assigned to the **Monitoring** group.

### User group permissions

[Section titled “User group permissions”](https://docs.mediakind.com/beam/system-admin/security/user-management/#user-group-permissions)

There are 3 default user groups. Permissions are either Read (R), Write (W), or Read and Write (R/W). Yes means the user group can carry out the action, but may be limited to specific options.

User group options depend on your processing type and product installation.

| | Admin | Configuration | Monitoring | API |
| :-- | :-- | :-- | :-- | :-- |
| Services | R/W | R/W | R | R/W |
| Servers | R/W | R/W | R | R/W |
| Templates | R/W | R/W | R | R/W |
| Failover | R/W | R/W | R | R/W |
| Alarms and Stats | R | R | R | R |
| Settings | R/W | N/A | N/A | R/W |
| Restore | Yes | Yes | No | R/W |
| Backup | Yes | Yes | Yes | R/W |
| User Management | R+W | N/A | N/A | N/A |

#### Failover default user rights per user group

[Section titled “Failover default user rights per user group”](https://docs.mediakind.com/beam/system-admin/security/user-management/#failover-default-user-rights-per-user-group)

Admin users have all rights.

**Monitoring** users can (based on Failover control privilege):

- View groups
- View group details
- View failover audit history
- Trigger manual failover
- Trigger a manual revert
- Trigger a maintenance mode

**Configuration** users (based on Failover configuration privilege):

- View groups
- View group details
- Trigger manual failover
- Trigger a manual revert
- Trigger a maintenance mode
- Create groups
- Edit groups
- Delete groups
- Edit default failover mode
- Edit timeout period

| Group | Services | Servers | Templates | System Center | Restore | Backup | User Management |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Admin | R+W | R+W | R+W | R+W | Yes | Yes | R+W |
| Monitoring | R | R | R | N/A | No | Yes | N/A |
| Configuration | R+W | R+W | R+W | N/A | Yes | Yes | N/A |

### Display the list of users

[Section titled “Display the list of users”](https://docs.mediakind.com/beam/system-admin/security/user-management/#display-the-list-of-users)

1. Click ![Gear][base64-image] in the upper right corner of the window.
2. Select **User Management**. The User Management Administration page displays.
3. Select **Users**.

The list of users displays. You can scroll to the end of the list to display the total number of users.

### Add a new group

[Section titled “Add a new group”](https://docs.mediakind.com/beam/system-admin/security/user-management/#add-a-new-group)

1. Click ![Gear][base64-image] in the upper right corner of the window.

2. Select **User Management**. The User Management Administration page displays.

3. Select **Groups**. The list of groups displays. You can scroll to the end of the list to display the total number of groups.

4. Select **Add Group**. You are prompted to enter group information.

5. Enter the **Name** and define the **Permissions** for the group, as shown in the example below:

 ![add new group](https://docs.mediakind.com/_astro/add_new_group.C-_DXq8V_xucqI.webp)

6. Select a **Save** option. The new **Group** appears in the list of groups.

![group list](https://docs.mediakind.com/_astro/group_list.CQ8ZJugd_Z28rizz.webp)

The group permissions for **Monitoring**, **Configuration**, **Admin** and **API** are listed below (permissions for these groups cannot be modified by the user):

**Monitoring**: The users with **Monitoring** access can perform the following actions in the code:

- Access the GUI
- Backup databases
- Manually perform a revert and failover of servers

**Configuration**: The users with **Configuration** access can perform the following actions in the code, in addition to the permissions described in the **Monitoring** group above:

- Restore databases
- Create, edit and delete services
- Create, edit and delete templates
- Create and edit servers
- Modify licenses
- Create, edit and delete failover groups
- Access settings
- Modify SNMP configurations
- Schedule jobs on services
- Edit alarm overrides
- Generate catalogs, outputs and assets

**Admin**: The users with **Admin** privileges can perform the following actions in the code, in addition to the permissions described in the **Monitoring**, **Configuration** and **API** groups above (meaning, these users have the rights to perform everything in the system):

- Modify external links and general settings
- Delete licenses and servers
- Reboot Servers

**API**: The users with **API** privileges have the right to access the API.

### Create a new user

[Section titled “Create a new user”](https://docs.mediakind.com/beam/system-admin/security/user-management/#create-a-new-user)

The Controller is a single access point for products. Administrators manage users, groups and permissions from the system center.

1. [Display users](https://docs.mediakind.com/beam/system-admin/security/user-management/#displaying-the-list-of-users).

2. Select **Add User**. You are prompted to enter User information.

3. Enter the User information.

 - **Username**
 - **Password**
4. Select a **Save** option.

5. [Assign a user to a group](https://docs.mediakind.com/beam/system-admin/security/user-management/#assign-a-user-to-a-group) to manage user access [rights and permissions](https://docs.mediakind.com/beam/system-admin/security/user-management/#user-group-permissions). By default, new users are assigned to the **Monitoring** group.

An Admin user can edit or create other Admin users and profiles, including passwords and permissions.

### Assign a user to a group

[Section titled “Assign a user to a group”](https://docs.mediakind.com/beam/system-admin/security/user-management/#assign-a-user-to-a-group)

Groups are a set of access rights and permissions. Permissions authorize users to either display or edit configurations. Give a user access rights by assigning the user to a group.

1. [Display users](https://docs.mediakind.com/beam/system-admin/security/user-management/#displaying-the-list-of-users).

2. Click the user in the list to display user information and permissions.

3. Scroll to **Permissions** then use the arrows to add the group to the list of **Chosen groups**. You can add multiple groups, or click **Choose all** to assign the user to all available groups.

 ![view permissions arrows user mgt controller](https://docs.mediakind.com/_astro/view_permissions_arrows_user_mgt_controller.ez6W1sh-_Z2vHA7I.webp)

4. Click **Save**.

### Link LDAP or Active Directory

[Section titled “Link LDAP or Active Directory”](https://docs.mediakind.com/beam/system-admin/security/user-management/#link-ldap-or-active-directory)

The MediaKind Controller can be linked with an external server (LDAP or _ActiveDirectory_) to identify and authenticate users. If activated, the authentication page displays before granting access to the **Home** page.

The LDAP connection parameters are defined in a dedicated configuration file. If using LDAP, the MediaKind Controller neither stores nor manages user passwords that are managed by the external LDAP server. Users defined on the external server can coexist with locally defined users.

1. See [LDAP configuration](https://docs.mediakind.com/beam/system-admin/security/ldap-management) for LDAP configuration procedures.
2. Follow the steps.

When users are first installed from the LDAP or _ActiveDirectory_ server, they are by default, automatically assigned to the Monitoring group. The default group can be configured. Alternatively, LDAP can be configured to assign groups based on LDAP group membership. Administrators can [edit user groups](https://docs.mediakind.com/beam/system-admin/security/user-management/#editing-user-information) to [manage permissions](https://docs.mediakind.com/beam/system-admin/security/user-management/#user-group-permissions) and access rights.

### Editing user information

[Section titled “Editing user information”](https://docs.mediakind.com/beam/system-admin/security/user-management/#editing-user-information)

1. [Display users](https://docs.mediakind.com/beam/system-admin/security/user-management/#displaying-the-list-of-users).

2. Select a **User**.

3. Edit the user information:

 - **Username**
 - **Password**
 - **Personal information**
 - [Permissions](https://docs.mediakind.com/beam/system-admin/security/user-management/#user-group-permissions)
4. Select a save option to continue or exit.

An Admin user can edit or create other Admin users and profiles, including passwords and permissions.

### Edit a user password

[Section titled “Edit a user password”](https://docs.mediakind.com/beam/system-admin/security/user-management/#edit-a-user-password)

Any user can edit their password, but only users with admin or configuration permissions can edit passwords for other users.

1. [Display the list of users](https://docs.mediakind.com/beam/system-admin/security/user-management/#displaying-the-list-of-users) in the System Center.

2. Click the current **Admin** user from the list to edit.

3. Click the **this form** link to change the password.

 ![view user management mfvp controller change password](https://docs.mediakind.com/_astro/view_user_management_mfvp_controller_change_password.CrFnKiqL_ZGbd3T.webp)

4. Edit user profile settings then click **Save**.

## Save options for user management

[Section titled “Save options for user management”](https://docs.mediakind.com/beam/system-admin/security/user-management/#save-options-for-user-management)

| Save option | Result |
| :-- | :-- |
| Save\*\* | The user is added to the list. |
| Save and continue\*\* | Additional user information displays (groups and permissions). |
| Save and add another | User is added to the list and the add user page is refreshed to add another new user. |