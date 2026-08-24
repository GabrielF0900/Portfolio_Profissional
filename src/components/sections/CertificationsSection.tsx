"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BadgeCheck, ExternalLink, Download, CalendarDays, ShieldCheck } from "lucide-react";
import { certifications, Certification } from "../../constants/certifications";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | "Certificação" | "Certificado" | "Estudando">("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadPdf = (e: React.MouseEvent, pdfUrl: string, title: string) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const mainFeatured = certifications.find((cert) => cert.id === 2);
  const secondaryFeatured = [
    certifications.find((cert) => cert.id === 1),
    certifications.find((cert) => cert.id === 20),
  ].filter(Boolean) as Certification[];

  const complementaryCertifications = certifications
    .filter((cert) => {
      if (filter === "all") return true;
      if (filter === "Estudando") return cert.status === "Estudando";
      return cert.type === filter;
    })
    .sort((a, b) => {
      // 19 is Java Completo, keep it high
      if (a.id === 19) return -1;
      if (b.id === 19) return 1;
      // 17 is AWS Re/Start
      if (a.id === 17) return -1;
      if (b.id === 17) return 1;
      return 0;
    });

  const countAll = certifications.length;
  const countCertificacoes = certifications.filter((cert) => cert.type === "Certificação").length;
  const countCertificados = certifications.filter((cert) => cert.type === "Certificado" && cert.status !== "Estudando").length;
  const countEstudando = certifications.filter((cert) => cert.status === "Estudando").length;

  const awsObtainedCount = [
    certifications.find((cert) => cert.id === 1),
    certifications.find((cert) => cert.id === 2),
  ].filter((cert) => cert?.status === "Certificado").length;

  const clfDateStr = secondaryFeatured[0]?.date;
  const saaDateStr = mainFeatured?.date;
  
  let progressionDays: number | null = null;
  
  if (clfDateStr && saaDateStr) {
    const parseDate = (dateStr: string) => {
      const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})/);
      if (match) {
        return new Date(`${match[2]}/${match[1]}/${match[3]}`);
      }
      return null;
    };
    
    const clfDate = parseDate(clfDateStr);
    const saaDate = parseDate(saaDateStr);
    
    if (clfDate && saaDate) {
      const diffTime = Math.abs(saaDate.getTime() - clfDate.getTime());
      progressionDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  return (
    <section 
      id="certificacoes" 
      className={styles.section} 
      ref={sectionRef}
      aria-labelledby="certifications-title"
    >
      <div className={styles.background} aria-hidden="true" />
      
      <div className={styles.container}>
        <div className={styles.revealElement} style={{ animationDelay: "100ms" }}>
          <div className={styles.sectionMarker}>
            <span className={styles.sectionMarkerIcon} aria-hidden="true">
              <BadgeCheck />
            </span>
            <span className={styles.sectionMarkerNumber}>04</span>
            <span className={styles.sectionMarkerSlash} aria-hidden="true">/</span>
            <span className={styles.sectionMarkerLabel}>CERTIFICAÇÕES</span>
          </div>

          <h2 id="certifications-title" className={styles.heading}>
            Certificações<br />e credenciais.
          </h2>

          <p className={styles.lead}>
            Credenciais que validam minha base em arquitetura cloud, backend e engenharia de software.
          </p>

          <div className={styles.headingAccent} aria-hidden="true" />
        </div>

        {/* AWS Certification Path Area */}
        <div className={`${styles.certificationPathPanel} ${styles.revealElement}`} style={{ animationDelay: "200ms" }}>
          <div className={styles.pathHeader}>
            <span className={styles.pathTitle}>AWS CERTIFICATION PATH</span>
            <span className={styles.pathCounter}>{awsObtainedCount} CERTIFICAÇÕES OBTIDAS</span>
          </div>

          <div className={styles.pathContent}>
            {/* Left: Main Featured SAA-C03 */}
            {mainFeatured && (
              <div className={styles.featuredCredential}>
                <div className={styles.fcTopLabel}>CREDENCIAL PRINCIPAL</div>

                <div className={styles.fcLayout}>
                  <div className={styles.fcBadgeArea}>
                    <div className={styles.fcAmbientGlow} aria-hidden="true" />
                    <Image src={mainFeatured.image} alt={mainFeatured.title} fill sizes="(max-width: 768px) 289px, 165px" className={styles.fcImage} />
                  </div>
                  
                  <div className={styles.fcInfoArea}>
                    <h3 className={styles.fcTitle}>
                      {mainFeatured.title}
                    </h3>

                    <div className={styles.fcMetadataGrid}>
                      <div className={styles.fcMetaBlock}>
                        <span className={styles.fcMetaLabel}>CÓDIGO DO EXAME</span>
                        <span className={styles.fcMetaValue}>{mainFeatured.examCode}</span>
                      </div>
                      
                      <div className={styles.fcMetaBlock}>
                        <span className={styles.fcMetaLabel}>STATUS</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span className={styles.fcStatusDot} aria-hidden="true" />
                          <span className={styles.fcStatusText}>{mainFeatured.status.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>

                    {mainFeatured.description && (
                      <p className={styles.fcDescription}>{mainFeatured.description}</p>
                    )}
                  </div>
                </div>

                <div className={styles.fcFooter}>
                  {mainFeatured.date && (
                    <>
                      <div className={styles.fcFooterItem}>
                        <CalendarDays size={16} className={styles.fcFooterIcon} />
                        <div className={styles.fcFooterTexts}>
                          <span className={styles.fcFooterLabel}>DATA</span>
                          <span className={styles.fcFooterValue}>{mainFeatured.date}</span>
                        </div>
                      </div>
                      <div className={styles.fcFooterDivider} aria-hidden="true" />
                    </>
                  )}
                  
                  <div className={styles.fcFooterItem}>
                    <ShieldCheck size={16} className={styles.fcFooterIcon} />
                    <div className={styles.fcFooterTexts}>
                      <span className={styles.fcFooterLabel}>EMISSOR</span>
                      <span className={styles.fcFooterValue}>{mainFeatured.issuer}</span>
                    </div>
                  </div>

                  {mainFeatured.credentialUrl && mainFeatured.credentialUrl !== "#" && (
                    <>
                      <div className={styles.fcFooterDivider} aria-hidden="true" />
                      <a href={mainFeatured.credentialUrl} target="_blank" rel="noopener noreferrer" className={styles.fcFooterCta}>
                        <div className={styles.fcFooterTexts}>
                          <span className={styles.fcFooterLabel}>VERIFICAÇÃO</span>
                          <span className={styles.fcFooterValueBlue}>
                            Ver credencial <ExternalLink size={14} />
                          </span>
                        </div>
                      </a>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Right: Vertical Track */}
            <div className={styles.certificationTrack}>
              <div className={styles.trackLine} aria-hidden="true" />
              
              {/* CLF-C02 */}
              {secondaryFeatured[0] && (
                <div className={styles.trackNodeWrapper}>
                  <div className={`${styles.trackPoint} ${styles.trackPointCompleted}`} />
                  <div className={styles.trackNodeContent}>
                    <span className={styles.trackExamCode}>{secondaryFeatured[0].examCode}</span>
                    <h4 className={styles.trackNodeTitle}>{secondaryFeatured[0].title.replace("AWS Certified ", "")}</h4>
                    <div className={styles.trackNodeStatusRow}>
                      <span className={styles.trackStatusLabelCompleted}>CERTIFICADO</span>
                      {secondaryFeatured[0].date && <span className={styles.trackNodeDate}>{secondaryFeatured[0].date}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* PROGRESSION MILESTONE */}
              {progressionDays !== null && progressionDays > 0 && (
                <div 
                  className={`${styles.progressMilestone} ${styles.revealElement}`} 
                  aria-label={`${progressionDays} dias entre a certificação AWS Cloud Practitioner e AWS Solutions Architect Associate`}
                >
                  <span className={styles.progressDays}>{progressionDays} DIAS</span>
                  <span className={styles.progressLabel}>CLF-C02 → SAA-C03</span>
                </div>
              )}

              {/* SAA-C03 */}
              {mainFeatured && (
                <div className={`${styles.trackNodeWrapper} ${styles.trackNodeHighlight}`}>
                  <div className={`${styles.trackPoint} ${styles.trackPointActive}`}>
                    <div className={styles.trackPointGlow} />
                  </div>
                  <div className={styles.trackNodeContent}>
                    <span className={styles.trackExamCode}>{mainFeatured.examCode}</span>
                    <h4 className={styles.trackNodeTitle}>{mainFeatured.title.replace("AWS Certified ", "")}</h4>
                    <div className={styles.trackNodeStatusRow}>
                      <span className={styles.trackStatusLabelCompleted}>CERTIFICADO</span>
                      {mainFeatured.date && <span className={styles.trackNodeDate}>{mainFeatured.date}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* SAP-C02 */}
              {secondaryFeatured[1] && (
                <div className={styles.trackNodeWrapper}>
                  <div className={`${styles.trackPoint} ${styles.trackPointStudying}`} />
                  <div className={styles.trackNodeContent}>
                    <span className={styles.trackExamCode}>{secondaryFeatured[1].examCode}</span>
                    <h4 className={styles.trackNodeTitle}>{secondaryFeatured[1].title.replace("AWS Certified ", "")}</h4>
                    <div className={styles.trackNodeStatusRow}>
                      <span className={styles.trackStatusLabelStudying}>EM ESTUDO</span>
                      {secondaryFeatured[1].statusMessage && <span className={styles.trackNodeDate}>{secondaryFeatured[1].statusMessage}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Complementary Area */}
        <div className={`${styles.credentialsExplorer} ${styles.revealElement}`} style={{ animationDelay: "500ms" }}>
          <div className={styles.explorerHeader}>
            <h3 className={styles.explorerTitle}>EXPLORAR CREDENCIAIS</h3>
            
            <div className={styles.filters} role="group" aria-label="Filtro de credenciais">
              <button 
                className={styles.filterBtn} 
                data-active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                TODOS <span className={styles.filterCount}>{countAll}</span>
              </button>
              <button 
                className={styles.filterBtn} 
                data-active={filter === "Certificação"}
                onClick={() => setFilter("Certificação")}
              >
                CERTIFICAÇÕES <span className={styles.filterCount}>{countCertificacoes}</span>
              </button>
              <button 
                className={styles.filterBtn} 
                data-active={filter === "Certificado"}
                onClick={() => setFilter("Certificado")}
              >
                CERTIFICADOS <span className={styles.filterCount}>{countCertificados}</span>
              </button>
              <button 
                className={styles.filterBtn} 
                data-active={filter === "Estudando"}
                onClick={() => setFilter("Estudando")}
              >
                ESTUDANDO <span className={styles.filterCount}>{countEstudando}</span>
              </button>
            </div>
          </div>

          <div className={styles.complementaryGrid}>
            {complementaryCertifications.map((cert, idx) => (
              <a 
                key={cert.id}
                href={cert.credentialUrl && cert.credentialUrl !== "#" ? cert.credentialUrl : cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.compCard} ${styles.revealElement}`}
                style={{ animationDelay: `${600 + (idx % 4) * 100}ms` }}
                onClick={(e) => {
                  if (cert.pdfUrl && (!cert.credentialUrl || cert.credentialUrl === "#")) {
                    handleDownloadPdf(e, cert.pdfUrl, cert.title);
                  }
                }}
              >
                <div className={styles.compImageWrapper}>
                  <div className={styles.certificationBadgeFrame}>
                    <Image src={cert.image} alt={cert.title} fill sizes="48px" className={styles.compImage} />
                  </div>
                </div>
                <div className={styles.compContent}>
                  <span className={styles.compBadge}>{cert.type}</span>
                  <h4 className={styles.compTitle}>{cert.title}</h4>
                  <div className={styles.compIssuer}>{cert.issuer}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className={styles.compDate}>{cert.date || cert.status}</span>
                    {cert.pdfUrl && (!cert.credentialUrl || cert.credentialUrl === "#") ? (
                      <Download size={14} style={{ color: "var(--certification-muted)" }} />
                    ) : (
                      <ExternalLink size={14} style={{ color: "var(--certification-muted)" }} />
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
