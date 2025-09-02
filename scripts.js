

        let filteredData = [...organizationsData];
        let currentFilter = 'all';

        // Helper functions
        function getDaysRemaining(deadline) {
            const today = new Date();
            const deadlineDate = new Date(deadline);
            const diffTime = deadlineDate - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }

        function formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(amount);
        }

        function createOrganizationCard(org) {
            const isComingSoon = org.recruitment.isComingSoon;
            const daysLeft = getDaysRemaining(org.recruitment.deadline);
            const isExpired = daysLeft < 0;
            const isClosingSoon = daysLeft <= 3 && daysLeft >= 0;
            const isQuotaFull = org.recruitment.quota.type === 'limited' && org.applicants >= org.recruitment.quota.number;
            const isDisabled = isExpired || isQuotaFull;

            return `
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-200 animate-slide-up cursor-pointer" 
                     onclick="showDetail('${org.id}')">
                    
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img src="${org.logo}" alt="Logo ${org.name}" class="w-full h-full object-contain">
                                </div>
                                <div>
                                    <h3 class="font-semibold text-lg text-gray-900 mb-1">${org.name}</h3>
                                </div>
                            </div>
                                
                          <div class="flex flex-col items-end gap-1">
                              <span class="text-xs px-2 py-1 rounded-full font-medium ${
                                  isComingSoon ? 'bg-blue-50 text-blue-600' : // Warna baru untuk 'Segera'
                                  isDisabled ? 'bg-red-50 text-red-600' : 
                                  isClosingSoon ? 'bg-orange-50 text-orange-600' : 
                                  'bg-green-50 text-green-600'
                              }">
                                  ${isComingSoon ? 'Segera' : isDisabled ? 'Ditutup' : isClosingSoon ? `${daysLeft} hari lagi` : 'Buka'}
                              </span>
                          </div>
                        </div>

                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${org.info.description}</p>

                        <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>Kuota Pendaftar: ${org.recruitment.quota.display}</span>
                        </div>

                      <div class="flex gap-2">
                          ${org.recruitment.guidebookUrl ? `
                              <button onclick="window.open('${org.recruitment.guidebookUrl}', '_blank'); event.stopPropagation();" 
                                      class="flex-1 text-center py-2.5 px-4 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors text-sm">
                                  Guidebook
                              </button>
                          ` : ''}
                          ${!isComingSoon ? `
                              ${!isDisabled ? `
                                  <button onclick="window.open('${org.recruitment.registrationUrl}', '_blank'); event.stopPropagation();" 
                                          class="flex-1 text-center py-2.5 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors text-sm">
                                      Daftar
                                  </button>
                              ` : `
                                  <button disabled
                                          class="flex-1 text-center py-2.5 px-4 bg-gray-100 text-gray-400 rounded-lg font-medium cursor-not-allowed text-sm">
                                      Ditutup
                                  </button>
                              `}
                          ` : `
                              <button disabled
                                      class="flex-1 py-2.5 px-4 bg-gray-100 text-gray-400 rounded-lg font-medium cursor-not-allowed text-sm">
                                  Segera
                              </button>
                          `}
                      </div>
                    </div>
                </div>
            `;
        }

        function renderOrganizations(data = filteredData) {
            const grid = document.getElementById('organizationsGrid');
            const noResults = document.getElementById('noResults');
            
            if (data.length === 0) {
                grid.innerHTML = '';
                noResults.classList.remove('hidden');
                return;
            }
            
            noResults.classList.add('hidden');
            grid.innerHTML = data.map(createOrganizationCard).join('');
        }

        function filterByCategory(filterValue, filterType = 'category') {
            currentFilter = filterValue;
            
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-primary-600', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
            });
            event.target.classList.add('active', 'bg-primary-600', 'text-white');
            event.target.classList.remove('bg-gray-100', 'text-gray-700');
            
            // Filter data
            if (filterValue === 'all') {
                filteredData = [...organizationsData];
            } else {
                if (filterType === 'category') {
                    filteredData = organizationsData.filter(org => org.category === filterValue);
                } else if (filterType === 'tag') {
                    filteredData = organizationsData.filter(org => org.tags.includes(filterValue.toLowerCase()));
                }
            }
            
            // Apply search if there's a query
            const searchQuery = document.getElementById('searchInput').value;
            if (searchQuery) {
                performSearch();
            } else {
                renderOrganizations();
            }
        }

        function performSearch() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            
            let searchResults = currentFilter === 'all' 
                ? [...organizationsData]
                : organizationsData.filter(org => org.category === currentFilter);
            
            if (query) {
                searchResults = searchResults.filter(org => 
                    org.name.toLowerCase().includes(query) ||
                    org.tags.some(tag => tag.toLowerCase().includes(query)) ||
                    org.info.description.toLowerCase().includes(query)
                );
            }
            
            filteredData = searchResults;
            renderOrganizations();
        }

        function showDetail(orgId) {
            const org = organizationsData.find(o => o.id === orgId);
            if (!org) return;
        
            const modal = document.getElementById('detailModal');
            const content = document.getElementById('modalContent');
        
            const isDataAvailable = org.recruitment.isDataAvailable;
            const daysLeft = isDataAvailable ? getDaysRemaining(org.recruitment.deadline) : null;
            const isExpired = isDataAvailable && daysLeft < 0;
            const isComingSoon = org.recruitment.isComingSoon;
            const isQuotaFull = org.recruitment.quota.type === 'limited' && org.applicants >= org.recruitment.quota.number;
            const isDisabled = isExpired || isQuotaFull;
        
            // Tampilkan pesan khusus jika data belum tersedia
            if (!isDataAvailable) {
                content.innerHTML = `
                    <div class="flex flex-col items-center justify-center p-12 text-center">
                        <svg class="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                        </svg>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Data Rekrutmen Belum Tersedia</h3>
                        <p class="text-gray-500 max-w-md">Mohon maaf, informasi lengkap mengenai rekrutmen organisasi ini akan segera diperbarui. Silakan cek kembali di lain waktu.</p>
                        <button onclick="closeModal()" class="mt-8 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                            Tutup
                        </button>
                    </div>
                `;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                return;
            }
        
            // Tampilan normal jika data tersedia
            content.innerHTML = `
                <div class="flex justify-between items-start mb-8">
                    <div class="flex items-start gap-4">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
                            <img src="${org.logo}" alt="Logo ${org.name}" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">${org.name}</h2>
                            <p class="text-gray-600 mb-2">${org.category}</p>
                        </div>
                    </div>
                    <button onclick="closeModal()"
                            class="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
        
                <div class="grid lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 space-y-8">
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Tentang Organisasi</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">${org.info.description}</p>
                            
                            ${org.info.vision || (org.info.mission && org.info.mission.length > 0) ? `
                            <div class="grid md:grid-cols-2 gap-6">
                                ${org.info.vision ? `
                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-2">Visi</h4>
                                    <p class="text-gray-600 text-sm">${org.info.vision}</p>
                                </div>
                                ` : ''}
                                ${org.info.mission && org.info.mission.length > 0 ? `
                                <div>
                                    <h4 class="font-semibold text-gray-900 mb-2">Misi</h4>
                                    <ul class="text-gray-600 text-sm space-y-1">
                                        ${org.info.mission.map(m => `<li>• ${m}</li>`).join('')}
                                    </ul>
                                </div>
                                ` : ''}
                            </div>
                            ` : ''}
                        </div>
        
                        ${(org.divisions && org.divisions.length > 0) || (org.info.generalRequirements && org.info.generalRequirements.length > 0) ? `
                        <div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Kualifikasi & Divisi</h3>
                            
                            ${org.info.generalRequirements && org.info.generalRequirements.length > 0 ? `
                            <div class="mb-4">
                                <p class="font-semibold text-gray-900 mb-2">Kualifikasi Umum</p>
                                <ul class="text-sm text-gray-500 space-y-1 mb-4">
                                    ${org.info.generalRequirements.map(req => `<li>• ${req}</li>`).join('')}
                                </ul>
                            </div>
                            ` : ''}
        
                          ${org.divisions && org.divisions.length > 0 ? `
                          <div class="grid grid-cols-1 gap-4">
                              ${org.divisions.map(div => `
                              <div class="border border-gray-200 rounded-xl p-4">
                                  <div class="flex justify-between items-start mb-3">
                                      <h4 class="font-semibold text-gray-900">${div.name}</h4>
                                      <span class="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full">
                                          ${div.quota ? `${div.quota} kuota` : 'Tanpa Kuota'}
                                      </span>
                                  </div>
                                  ${div.description ? `
                                  <div class="mb-3">
                                      <p class="text-sm text-gray-600 mb-2">Deskripsi:</p>
                                      <p class="text-sm text-gray-500">
                                          ${div.description}
                                      </p>
                                  </div>
                                  ` : ''}
                                  ${div.requirements && div.requirements.length > 0 ? `
                                  <div>
                                      <p class="text-sm text-gray-600 mb-2">Persyaratan Khusus:</p>
                                      <ul class="text-sm text-gray-500 space-y-1">
                                          ${div.requirements.map(req => `<li>• ${req}</li>`).join('')}
                                      </ul>
                                  </div>
                                  ` : ''}
                              </div>
                              `).join('')}
                          </div>
                          ` : ''}
                        </div>
                        ` : ''}
                    </div>
        
                    <div class="space-y-6">
                        <div class="bg-gray-50 rounded-2xl p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Info Rekrutmen</h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Status</span>
                                    <span class="font-medium ${isDisabled ? 'text-red-600' : isComingSoon ? 'text-blue-600' : 'text-green-600'}">
                                        ${isDisabled ? 'Ditutup' : isComingSoon ? 'Segera' : 'Dibuka'}
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Deadline</span>
                                    <span class="font-medium">${new Date(org.recruitment.deadline).toLocaleDateString('id-ID')}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Sisa waktu</span>
                                    <span class="font-medium ${isExpired ? 'text-red-600' : 'text-primary-600'}">
                                        ${isExpired ? 'Sudah ditutup' : `${daysLeft} hari lagi`}
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Kuota</span>
                                    <span class="font-medium">${org.recruitment.quota.display}</span>
                                </div>
                            </div>
                        </div>
        
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Timeline Rekrutmen</h3>
                            <div class="space-y-4">
                                ${org.timeline.map((phase, index) => `
                                <div class="flex items-start gap-3">
                                    <div class="flex flex-col items-center">
                                        <div class="w-3 h-3 rounded-full ${
                                            phase.status === 'completed' ? 'bg-green-500' :
                                            phase.status === 'ongoing' ? 'bg-primary-500' :
                                            'bg-gray-300'
                                        }"></div>
                                        ${index < org.timeline.length - 1 ? '<div class="w-0.5 h-8 bg-gray-200 mt-2"></div>' : ''}
                                    </div>
                                    <div class="flex-1 pb-6">
                                        <h4 class="font-medium text-gray-900 ${phase.status === 'ongoing' ? 'text-primary-600' : ''}">${phase.phase}</h4>
                                        <p class="text-sm text-gray-500 mt-1">
                                            ${new Date(phase.startDate).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'})}
                                            ${phase.startDate !== phase.endDate ? ` - ${new Date(phase.endDate).toLocaleDateString('id-ID', {day: 'numeric', month: 'short'})}` : ''}
                                        </p>
                                    </div>
                                </div>
                                `).join('')}
                            </div>
                        </div>
        
                        ${Object.keys(org.info.contactInfo).length > 0 ? `
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Kontak</h3>
                            <div class="space-y-3">
                                ${Object.keys(org.info.contactInfo).map(key => {
                                    const value = org.info.contactInfo[key];
                                    let icon, bgColor, label, link;
                                    if (key.includes('instagram')) {
                                        icon = `<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C8.396 0 8.006.01 6.76.048 2.291.189.24 2.434.048 6.944.01 8.284 0 8.666 0 12.017s.01 3.733.048 4.972c.189 4.51 2.434 6.756 6.944 6.947 1.24.038 1.622.048 4.972.048s3.733-.01 4.972-.048c4.51-.189 6.756-2.434 6.947-6.944.038-1.24.048-1.622.048-4.972s-.01-3.733-.048-4.972C23.758 2.434 21.513.24 17.006.048 15.67.01 15.284 0 12.017 0zm0 2.17c3.291 0 3.682.012 4.982.048 3.065.135 4.775 1.847 4.91 4.91.036 1.3.048 1.691.048 4.982s-.012 3.682-.048 4.982c-.135 3.063-1.845 4.775-4.91 4.91-1.3.036-1.691.048-4.982.048s-3.682-.012-4.982-.048c-3.063-.135-4.775-1.847-4.91-4.91C2.017 15.699 2.017 15.308 2.017 12.017s0-3.682.048-4.982c.135-3.063 1.847-4.775 4.91-4.91C8.335 2.089 8.726 2.17 12.017 2.17zm0 3.405c-3.632 0-6.442 2.81-6.442 6.442s2.81 6.442 6.442 6.442 6.442-2.81 6.442-6.442-2.81-6.442-6.442-6.442zm0 10.617c-2.304 0-4.175-1.871-4.175-4.175s1.871-4.175 4.175-4.175 4.175 1.871 4.175 4.175-1.871 4.175-4.175 4.175zm6.584-10.845c0 .848-.687 1.535-1.535 1.535s-1.535-.687-1.535-1.535.687-1.535 1.535-1.535 1.535.687 1.535 1.535z"/>
                                            </svg>`;
                                        bgColor = 'bg-pink-500';
                                        label = value;
                                        link = `https://instagram.com/${value.replace('@', '')}`;
                                    } else if (key.includes('email')) {
                                        icon = `<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`;
                                        bgColor = 'bg-blue-500';
                                        label = value;
                                        link = `mailto:${value}`;
                                    } else if (key.includes('whatsapp')) {
                                        icon = `<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.388"/></svg>`;
                                        bgColor = 'bg-green-500';
                                        label = value;
                                        link = `https://wa.me/${value.replace('+', '')}`;
                                    } else if (key.includes('telegram')) {
                                        icon = `<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.15 3.868l-3.326 15.656c-.097.464-.344.606-.74.378l-4.223-3.111c-.34-.251-.652-.33-.946-.058l-3.238 2.119c-.318.208-.584.148-.737-.16l-2.09-6.666c-.116-.38.006-.525.338-.769l10.985-7.795c.29-.205.534-.148.337.054L5.278 12.338l-4.992-1.57c-.453-.142-.46-.464.108-.66l22.617-8.157c.484-.175.766.113.567.575z"/></svg>`;
                                        bgColor = 'bg-blue-400';
                                        label = value;
                                        link = value.startsWith('t.me/') ? `https://${value}` : `https://t.me/${value}`;
                                    }
        
                                    return `
                                        <a href="${link}"
                                            target="_blank"
                                            class="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div class="w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center">
                                                ${icon}
                                            </div>
                                            <span class="font-medium">${label}</span>
                                        </a>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </div>
        
                <div class="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200 mt-8">
                    ${org.recruitment.guidebookUrl ? `
                        <button onclick="window.open('${org.recruitment.guidebookUrl}', '_blank'); event.stopPropagation();"
                                class="flex-1 py-3 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors">
                            Download Guidebook
                        </button>
                    ` : ''}
                    ${!org.recruitment.isComingSoon ? `
                        ${!isExpired ? `
                            <button onclick="window.open('${org.recruitment.registrationUrl}', '_blank')"
                                    class="flex-1 py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors">
                                Daftar Sekarang
                            </button>
                        ` : `
                            <button disabled
                                    class="flex-1 py-3 px-6 bg-gray-100 text-gray-400 rounded-xl font-medium cursor-not-allowed">
                                Pendaftaran Ditutup
                            </button>
                        `}
                    ` : `
                        <button disabled
                                class="flex-1 py-3 px-6 bg-gray-100 text-gray-400 rounded-xl font-medium cursor-not-allowed">
                            Segera Dibuka
                        </button>
                    `}
                </div>
            `;
        
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('detailModal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('detailModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        document.getElementById('detailModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            renderOrganizations();
        });