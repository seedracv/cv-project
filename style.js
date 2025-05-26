
function showJobForm() {
    let forms = document.querySelectorAll('.jobForm');
    forms.forEach(form => form.style.display = 'none');
  
    let selectedJob = document.getElementById('jobSelect').value;
    if (selectedJob) {
      document.getElementById(selectedJob + 'Form').style.display = 'block';
    }
  }

  function checkEmptyField(fieldId, errorId) {
    let field = document.getElementById(fieldId);
    let error = document.getElementById(errorId);
  
    if (field.value.trim() === '') {
      error.textContent = 'الرجاء تعبئة هذا الحقل!';
      error.style.color = 'red';
      return false;
    } else {
      error.textContent = '';
      return true;
    }
  }
  
  // ارسال البيانات
  function submitForm(job) {
    if (checkEmptyField(job + 'Field', job + 'Error')) {
      alert('تم إرسال البيانات بنجاح!');
      document.getElementById(job + 'Field').disabled = true;
      document.getElementById(job + 'editBtn_' + job).style.display = 'inline-block'; // اظهار زر التعديل
    }
  }
  
  // تفعيل تعديل البيانات
  function enableEdit(job) {
    document.getElementById(job + 'Field').disabled = false;
    document.getElementById('editBtn_' + job).style.display = 'none'; // اخفاء زر التعديل
  }
  
  // تغيير لون الحقل حسب الكتابة
  function changeFieldColor(fieldId) {
    let field = document.getElementById(fieldId);
  
    field.addEventListener('input', function() {
      if (field.value.trim() === '') {
        field.style.borderColor = 'red';
      } else {
        field.style.borderColor = 'green';
      }
    });
  }
  
  // عند تحميل الصفحة فعل تغيير اللون لكل حقل
  window.onload = function() {
    changeFieldColor('doctorField');
    changeFieldColor('pharmacistField');
    changeFieldColor('engineerField');
    changeFieldColor('lawyerField');
    changeFieldColor('teacherField');
    changeFieldColor('writerField');
    changeFieldColor('programmerField');
    changeFieldColor('webDevField');
    changeFieldColor('photographerField');
    changeFieldColor('chemistField');
    changeFieldColor('dentistField');
  }
  
  function generateCV() {
    // جلب القيم من الحقول
    let name = document.getElementById('nameField').value;
    let job = document.getElementById('jobField').value;
    let email = document.getElementById('emailField').value;
    let phone = document.getElementById('phoneField').value;
    let skills = document.getElementById('skillsField').value;
    let experience = document.getElementById('experienceField').value;
  
  }
  function changeForm() {
    const job = document.getElementById('job').value;
    const formFields = document.getElementById('form-fields');

    // ألوان الواجهة الخاصة بالمهن
    const jobColors = {
        doctor: '#e3f2fd',
        dentist: '#fce4ec',
        engineer: '#e8f5e9',
        pharmacist: '#e1f5fe',
        lawyer: '#f3e5f5',
        teacher: '#fff9c4',
        architect: '#e0f7fa',
        chemist: '#ede7f6',
        writer: '#fff3e0',
        photographer: '#fce4ec'
    };

    // رموز كل مهنة (رمزية فقط)
    const jobIcons = {
        doctor: '⚕️',
        dentist: '🦷',
        engineer: '⚙️',
        pharmacist: '💊',
        lawyer: '⚖️',
        teacher: '📚',
        architect: '🏛️',
        chemist: '⚗️',
        writer: '✍️',
        photographer: '📷'
    };

    // حقول كل مهنة
    const jobFieldsData = {
        doctor: [
            { label: '⚕️ الاختصاص', placeholder: 'مثال: جراحة عامة', min: 3, max: 30 },
            { label: '🏥 المشافي', placeholder: 'مثال: مشفى الهلال', min: 3, max: 50 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 5', min: 1, max: 2 }
        ],
        dentist: [
            { label: '🦷 التخصص', placeholder: 'مثال: تركيبات', min: 3, max: 30 },
            { label: '🏥 المراكز', placeholder: 'مثال: مركز الابتسامة', min: 3, max: 50 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 4', min: 1, max: 2 }
        ],
        engineer: [
            { label: '⚙️ الاختصاص', placeholder: 'مثال: مدني', min: 3, max: 30 },
            { label: '🏗️ المشاريع', placeholder: 'مثال: برج العرب', min: 3, max: 50 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 6', min: 1, max: 2 }
        ],
        lawyer: [
            { label: '⚖️ نوع القضايا', placeholder: 'مثال: جنائي', min: 3, max: 30 },
            { label: '📁 عدد القضايا', placeholder: 'مثال: 25', min: 1, max: 3 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 8', min: 1, max: 2 }
        ],
        teacher: [
            { label: '📘 المادة', placeholder: 'مثال: رياضيات', min: 3, max: 30 },
            { label: '🏫 المراحل الدراسية', placeholder: 'مثال: ابتدائي', min: 3, max: 30 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 7', min: 1, max: 2 }
        ],
        pharmacist: [
            { label: '💊 أنواع الأدوية', placeholder: 'مثال: مضادات حيوية', min: 3, max: 40 },
            { label: '🏪 الصيدليات', placeholder: 'مثال: صيدلية الحياة', min: 3, max: 40 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 3', min: 1, max: 2 }
        ],
        architect: [
            { label: '🏛️ نوع التصميم', placeholder: 'مثال: داخلي', min: 3, max: 30 },
            { label: '🏢 الشركات', placeholder: 'مثال: شركة عمران', min: 3, max: 40 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 9', min: 1, max: 2 }
        ],
        chemist: [
            { label: '⚗️ مجال العمل', placeholder: 'مثال: تحاليل مخبرية', min: 3, max: 40 },
            { label: '🧪 التجارب', placeholder: 'مثال: تطوير أدوية', min: 3, max: 50 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 4', min: 1, max: 2 }
        ],
        writer: [
            { label: '✍️ نوع الكتابة', placeholder: 'مثال: روايات', min: 3, max: 30 },
            { label: '📚 عدد الكتب', placeholder: 'مثال: 10', min: 1, max: 2 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 6', min: 1, max: 2 }
],
        photographer: [
            { label: '📷 نوع التصوير', placeholder: 'مثال: حفلات', min: 3, max: 30 },
            { label: '📸 المعدات', placeholder: 'مثال: Canon EOS', min: 3, max: 30 },
            { label: '📅 سنوات الخبرة', placeholder: 'مثال: 5', min: 1, max: 2 }
        ]
    };

    // تفريغ الحقول السابقة
    formFields.innerHTML = '';

    if (job) {
        // تغيير لون خلفية منطقة الحقول فقط
        formFields.style.backgroundColor = jobColors[job];
        formFields.style.padding = '20px';
        formFields.style.borderRadius = '10px';

        // عرض الحقول الخاصة بالمهنة
        jobFieldsData[job].forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = field.placeholder;
            input.minLength = field.min;
            input.maxLength = field.max;
            input.required = true;
            input.style.marginBottom = '10px';
            formFields.appendChild(label);
            formFields.appendChild(input);
        });
        formFields.appendChild(validateButton);

        // رسم بياني رمزي بسيط
        const chart = document.createElement('div');
        chart.textContent = '📊 رسم بياني للمهنة';
        chart.style.marginTop = '15px';
        chart.style.fontSize = '20px';
        formFields.appendChild(chart);
    } else {
        formFields.style.backgroundColor = 'transparent';
    }
}
function showJobForm() {
  let forms = document.querySelectorAll('.jobForm');
  forms.forEach(form => form.style.display = 'none');

  let selectedJob = document.getElementById('jobSelect').value;
  if (selectedJob) {
    document.getElementById(selectedJob + 'Form').style.display = 'block';
  }
}

function checkEmptyField(fieldId, errorId) {
  let field = document.getElementById(fieldId);
  let error = document.getElementById(errorId);

  if (field.value.trim() === '') {
    error.textContent = 'الرجاء تعبئة هذا الحقل!';
    error.style.color = 'red';
    return false;
  } else {
    error.textContent = '';
    return true;
  }
}

