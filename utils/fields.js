// Client field config
export const fieldConfig = [
    {
      label: 'Fee payment',
      name: 'fee_payment',
      placeholder: 'Fee Payment',
      options: [
        { label: 'School fees', value: 'school_fees' },
        { label: 'Trip Payment', value: 'trip_payment' },
       
      ],
      type: 'select',
    },
    {
        label: 'School Name',
        name: 'school_name',
        placeholder: 'School Name',
        options: [
          { label: 'Central High School', value: 'central_high_school' },
          { label: 'Mount View Primary School', value: 'mount_view_primary_school' },
          { label: 'Nyasa Academy', value: 'nyasa_academy' },
          { label: 'Kalibu Academy', value: 'kalibu_academy' },
        ],
        type: 'select',
      },
    {
      label: 'Student ID',
      name: 'student_id',
      placeholder: 'Student ID',
      type: 'text',
    },
    // {
    //   label: 'Student Name',
    //   name: 'student_name',
    //   placeholder: 'Student Name',
    //   type: 'text',
    // },
    {
      label: 'Amount Paid',
      name: 'amount',
      placeholder: 'Amount Paid',
      type: 'number',
    },
    {
      label: 'Comment',
      name: 'comment',
      placeholder: 'Comment',
      type: 'text',
    },
    {
      label: 'Payment option',
      name: 'payment_option',
      placeholder: 'Payment option',
      options: [
        { label: 'Full Payment', value: 'full_payment' },
        { label: 'Part Payment', value: 'part_payment' },
      ],
      type: 'select',
    },
    {
        label: 'Payment method',
        name: 'payment_method',
        placeholder: 'Payment method',
        options: [
          { label: 'FCB Branch', value: 'fcb_branch' },
          { label: 'Other Bank Branch', value: 'other_bank_branch' },
          { label: 'FCB Internet Banking/Mobile App', value: 'fcb_internet_banking' },
          { label: 'Other Bank Internet Banking/ Mobile App', value: 'mobile_app' },
          { label: 'POS', value: 'pos' },
        ],
        type: 'select',
      },
  ];
  // Client field config
export const userFieldConfig = [
    {
      label: 'User Role',
      name: 'role',
      placeholder: 'User Role',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Parent', value: 'parent' },
        { label: 'Officer', value: 'officer' },
      ],
      type: 'select',
    },
    {
      label: 'Username',
      name: 'username',
      placeholder: 'Username',
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'email',
      placeholder: 'Email Address',
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'phone_number',
      placeholder: 'Phone Number',
      type: 'text',
    }
  ];