// Opções de distritos por província
const districtOptions = {
    "Maputo": ["Maputo", "Matola", "Marracuene"],
    "Gaza": ["Xai-Xai", "Chibuto", "Bilene"],
    "Inhambane": ["Inhambane", "Maxixe", "Jangamo"],
    "Sofala": ["Beira", "Dondo", "Muanza"],
    "Manica": ["Chimoio", "Gorongosa", "Sussundenga"],
    "Tete": ["Tete", "Moatize", "Chiuta"],
    "Zambézia": ["Quelimane", "Nhamatanda", "Mocuba"],
    "Nampula": ["Nampula", "Nacala", "Monapo"],
    "Niassa": ["Lichinga", "Cuamba", "Mandimba"],
    "Cabo Delgado": ["Pemba", "Chiure", "Mueda"]
};

// Função para registrar diarista ou cliente
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.querySelector('input[name="userType"]:checked').value;

    if (userType === 'diarista') {
        const name = document.getElementById('name').value;
        const experience = document.getElementById('experience').value;
        const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(checkbox => checkbox.value);
        const province = document.getElementById('province').value;
        const district = document.getElementById('district').value;
        const bairro = document.getElementById('bairro').value;
        const rua = document.getElementById('rua').value;
        const contact = document.getElementById('contact').value;

        alert(`Diarista ${name} registrada com sucesso!\nExperiência: ${experience} anos\nServiços: ${services.join(', ')}\nLocalização: ${bairro}, ${district}, ${province}\nContato: ${contact}`);
    } else {
        const clientName = document.getElementById('clientName').value;
        const clientEmail = document.getElementById('clientEmail').value;
        const clientPhone = document.getElementById('clientPhone').value;

        alert(`Cliente ${clientName} registrado com sucesso!\nE-mail: ${clientEmail}\nTelefone: ${clientPhone}`);
    }

    this.reset();
});

// Função para popular os distritos com base na província selecionada
document.getElementById('province').addEventListener('change', function() {
    const districtSelect = document.getElementById('district');
    const selectedProvince = this.value;

    districtSelect.innerHTML = '<option value="">Selecione o Distrito</option>';

    if (selectedProvince) {
        districtOptions[selectedProvince].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});

// Função para alternar os campos de registro com base no tipo de usuário selecionado
document.querySelectorAll('input[name="userType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'diarista') {
            document.getElementById('diaristaFields').style.display = 'block';
            document.getElementById('clienteFields').style.display = 'none';
        } else {
            document.getElementById('diaristaFields').style.display = 'none';
            document.getElementById('clienteFields').style.display = 'block';
        }
    });
});

// Inicializa a exibição correta dos campos
document.querySelector('input[name="userType"]:checked').dispatchEvent(new Event('change'));